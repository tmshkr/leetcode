import * as fs from "fs";
import * as path from "path";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";

export function createFiles(data) {
  const { titleSlug, questionFrontendId } = data.question;
  const folderName = `_${questionFrontendId}_${titleSlug}`.replace(/-/g, "_");
  const folderPath = path.join("solutions", folderName);
  const metaData = JSON.parse(data.question.metaData);
  data.question.codeSnippets = data.question.codeSnippets.reduce((acc, cur) => {
    acc[cur.langSlug] = cur.code;
    return acc;
  }, {});

  const args = getArgs({ data, folderName, folderPath, metaData });

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
  data,
  folderName,
  folderPath,
  metaData,
}: {
  data: any;
  folderName: string;
  folderPath: string;
  metaData: any;
}) {
  try {
    return {
      data,
      folderName,
      folderPath,
      metaData,
      classParams:
        "classname" in metaData ? handleClassParams(data, metaData) : undefined,
      functionParams:
        "classname" in metaData
          ? undefined
          : handleFunctionParams(data, metaData),
    };
  } catch (err) {
    console.error("There was an error parsing the question data.");
    throw err;
  }
}

function handleClassParams(data, metaData) {
  const exampleTestcases: any[] = data.question.exampleTestcases
    .split("\n")
    .map((x) => JSON.parse(x));
  const exampleTestOutputs: any[] = JSON.parse(
    data.question.content
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

function handleFunctionParams(data, metaData) {
  const functionName: string = metaData.name;
  const exampleTestcases: any[] = [];
  data.question.exampleTestcases.split("\n").reduce((acc, cur, i) => {
    acc.push(cur);
    if ((i + 1) % metaData.params.length === 0) {
      exampleTestcases.push(acc);
      acc = [];
    }
    return acc;
  }, []);
  const exampleTestOutputs = data.question.content
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
