import puppeteer from "puppeteer";
import { createFiles } from "./createFiles";
import { QuestionJson } from "./question";
const problems = require("./problems.json");
import { writeFileSync } from "fs";
import path from "path";

export type ParsedQuestion = ReturnType<typeof parseQuestion>;

export async function getQuestion(argv) {
    let { titleSlug, number } = argv;
    if (Number(number)) {
        titleSlug = problems[number];
    }

    console.log(`getting ${titleSlug}`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(
        (await browser.userAgent()).replace("HeadlessChrome", "Chrome")
    );


    await page.goto(`https://leetcode.com/problems/${titleSlug}/`);
    await page.waitForSelector('#__NEXT_DATA__');

    const elementHandle = await page.$('#__NEXT_DATA__');
    const innerHTML = await page.evaluate((el: any) => el.innerHTML, elementHandle);

    const nextData = JSON.parse(innerHTML);
    const question: QuestionJson = nextData.props.pageProps.dehydratedState.queries.find((q: any) => q.state.data.question).state.data.question;

    if (!question) {
        throw new Error('Question data not found');
    }

    await browser.close();

    const parsedQuestion = parseQuestion(question);
    // writeFileSync(
    //     path.join("question.json"),
    //     JSON.stringify(question, null, 2)
    // );
    // writeFileSync(
    //     path.join("parsedQuestion.json"),
    //     JSON.stringify(parsedQuestion, null, 2)
    // );
    createFiles(parsedQuestion);
}

function parseQuestion(question: QuestionJson) {
    const { codeSnippets, titleSlug, exampleTestcaseList, content, questionFrontendId } = question;
    const folderName = `_${questionFrontendId}_${titleSlug}`.replace(/-/g, "_");
    const folderPath = path.join("solutions", folderName);
    try {
        const metaData: {
            name?: string;
            classname?: string;
            params: { name: string; type: string; }[];
            return: { type: string; };
        } = JSON.parse(question.metaData);

        return {
            codeSnippets: codeSnippets.reduce((
                acc: Record<string, { code: string; langSlug: string }>,
                snippet) => {
                acc[snippet.langSlug] = {
                    code: snippet.code,
                    langSlug: snippet.langSlug,
                };
                return acc;
            }, {}),
            folderPath,
            folderName,
            metaData,
            titleSlug,
            classParams:
                "classname" in metaData
                    ? handleClassParams({ exampleTestcaseList, content })
                    : undefined,
            functionParams:
                "classname" in metaData
                    ? undefined
                    : handleFunctionParams({
                        exampleTestcaseList,
                        content,
                        metaData,
                    }),
        };
    } catch (err) {
        console.error("There was an error parsing the question data.");
        throw err;
    }
}

function handleClassParams({ exampleTestcaseList, content }) {
    const exampleTestInputs = exampleTestcaseList[0].split("\n").map((x) => {
        try {
            return JSON.parse(x);
        } catch (err) {
            console.log(err);
            return x;
        }
    });
    const exampleTestOutputs = JSON.parse(
        content.match(/Output.*\n(.*)/)[1]
    );
    exampleTestOutputs.shift();
    const [functions, params] = exampleTestInputs;
    const [constructor, ...methods] = functions;
    const [constructorParams, ...methodParams] = params;
    const instance: string = constructor[0].toLowerCase() + constructor.slice(1);

    return {
        constructor,
        constructorParams,
        exampleTestInputs,
        exampleTestOutputs,
        instance,
        methodParams,
        methods,
    };
}

function handleFunctionParams({
    exampleTestcaseList,
    content,
    metaData,
}) {
    const exampleTestInputs: any[] = exampleTestcaseList.map((inputs) => inputs.split("\n"));
    const functionName: string = metaData.name;
    const exampleTestOutputs: any[] = [];
    const matches = content.
        matchAll(/<strong>Output:<\/strong>.*<span class=\"example-io\">(.*)<\/span>/g);

    for (const match of matches) {
        if (!match[1]) {
            console.warn("No output found for example test case:", match);
            continue;
        }
        exampleTestOutputs.push(handleReturnType(metaData, match[1]));
    }


    return {
        exampleTestInputs,
        exampleTestOutputs,
        functionName,
    };
}

function handleReturnType(metaData, value): string | number | boolean | object | any[] {
    if (!metaData || !metaData.return || !metaData.return.type) {
        throw new Error("Return type is not defined in metaData");
    }
    switch (metaData.return.type) {
        case "string":
            return value.toString();
        case "number":
            return value;
        case "boolean":
            return value === "true" ? true : false;
        case "array":
            return `[${value}]`;
        case "object":
            return `{${Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(", ")}}`;
        default:
            throw new Error(`Unsupported return type: ${metaData.return.type}`);
    }

}