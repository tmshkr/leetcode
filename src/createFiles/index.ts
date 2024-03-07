import * as fs from "fs";
import * as path from "path";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";

export function createFiles({
  codeSnippets,
  exampleTestcaseList,
  metaData,
  titleSlug,
  questionContent,
  questionFrontendId,
}: {
  codeSnippets: any;
  exampleTestcaseList: any;
  metaData: any;
  titleSlug: string;
  questionContent: string;
  questionFrontendId: string;
}) {
  const folderName = `_${questionFrontendId}_${titleSlug}`.replace(/-/g, "_");
  const folderPath = path.join("solutions", folderName);
  const args = getArgs({
    codeSnippets,
    exampleTestcaseList,
    folderPath,
    folderName,
    metaData,
    titleSlug,
    questionContent,
  });

  createFolder(folderPath);
  createJavaFiles(args);
  createJavaScriptFiles(args);
  createPythonFiles(args);
  console.log(`success!`);
}

function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`deleted ${folderPath}`);
  }
  fs.mkdirSync(folderPath);
  console.log(`created ${folderPath}`);
}

export type Args = ReturnType<typeof getArgs>;
function getArgs({
  codeSnippets,
  exampleTestcaseList,
  folderPath,
  folderName,
  metaData,
  titleSlug,
  questionContent,
}: {
  codeSnippets: any;
  exampleTestcaseList: any;
  folderPath: string;
  folderName: string;
  metaData: any;
  titleSlug: string;
  questionContent: string;
}) {
  try {
    return {
      codeSnippets,
      folderPath,
      folderName,
      metaData,
      titleSlug,
      classParams:
        "classname" in metaData
          ? handleClassParams({ exampleTestcaseList, questionContent })
          : undefined,
      functionParams:
        "classname" in metaData
          ? undefined
          : handleFunctionParams({
              exampleTestcaseList,
              metaData,
              questionContent,
            }),
    };
  } catch (err) {
    console.error("There was an error parsing the question data.");
    throw err;
  }
}

function handleClassParams({ exampleTestcaseList, questionContent }) {
  const exampleTestcases: any[] = exampleTestcaseList.map((x) => JSON.parse(x));
  const exampleTestOutputs: any[] = JSON.parse(
    questionContent
      .match(/<[strong|b]>Output.?<\/[strong|b]>\n(.*)/)[1]
      .replaceAll("&quot;", '"')
  );

  exampleTestOutputs.shift();
  const [functions, params] = exampleTestcases;
  const [constructor, ...methods] = functions;
  const [constructorParams, ...methodParams] = params;
  const instance: string = constructor[0].toLowerCase() + constructor.slice(1);

  return {
    constructor,
    constructorParams,
    exampleTestcases,
    exampleTestOutputs,
    instance,
    methodParams,
    methods,
  };
}

function handleFunctionParams({
  exampleTestcaseList,
  metaData,
  questionContent,
}) {
  const functionName: string = metaData.name;
  const exampleTestcases = exampleTestcaseList;
  const exampleTestOutputs = questionContent
    .match(/<strong>Output:<\/strong> .+/g)
    .map((x) => {
      const str = x.replace("<strong>Output:</strong> ", "");
      try {
        return JSON.parse(str);
      } catch (err) {
        return str;
      }
    });

  return {
    exampleTestcases,
    exampleTestOutputs,
    functionName,
  };
}
