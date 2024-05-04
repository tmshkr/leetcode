import * as fs from "fs";
import * as path from "path";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";
import { globSync } from "glob";

export function createFiles({
  codeSnippets,
  exampleTestcaseList,
  metaData,
  titleSlug,
  questionContent,
  questionFrontendId,
}: {
  codeSnippets: any;
  exampleTestcaseList: string[];
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
  exampleTestcaseList: string[];
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
              questionContent,
              metaData,
            }),
    };
  } catch (err) {
    console.error("There was an error parsing the question data.");
    throw err;
  }
}

function handleClassParams({ exampleTestcaseList, questionContent }) {
  const exampleTestInputs = exampleTestcaseList[0].split("\n").map((x) => {
    try {
      return JSON.parse(x);
    } catch (err) {
      console.log(err);
      return x;
    }
  });
  const exampleTestOutputs = JSON.parse(
    questionContent.match(/Output.*\n(.*)/)[1]
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
  questionContent,
  metaData,
}) {
  const functionName: string = metaData.name;
  const exampleTestInputs = exampleTestcaseList.map((eg) => eg.split("\n"));
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
    exampleTestInputs,
    exampleTestOutputs,
    functionName,
  };
}
