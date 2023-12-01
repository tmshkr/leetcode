import * as fs from "fs";
import * as path from "path";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";

export function createFiles(data) {
  const { titleSlug, questionId } = data.question;
  const folderName = `_${questionId}_${titleSlug}`.replace(/-/g, "_");
  const folderPath = path.join("solutions", folderName);
  const metaData = JSON.parse(data.question.metaData);

  let params: any = {};
  try {
    if ("classname" in metaData) {
      params = handleClassParams(data);
    } else {
      params = handleFunctionParams(data, metaData);
    }
  } catch (err) {
    console.error("There was an error parsing the example test outputs");
    throw err;
  }

  const args = {
    data,
    folderName,
    folderPath,
    metaData,
    params,
  };

  createFolder(folderPath);
  // createJavaFiles(args);
  // createJavaScriptFiles(args);
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

function handleClassParams(data) {
  const exampleTestcases: any[] = data.question.exampleTestcases
    .split("\n")
    .map((x) => JSON.parse(x));
  const exampleTestOutputs: any[] = JSON.parse(
    data.question.content.match(/<strong>Output<\/strong>\n(.*)/)[1]
  );

  exampleTestOutputs.shift();
  const [functions, params] = exampleTestcases[0].map((x) => JSON.parse(x));
  const [constructor, ...methods] = functions;
  const [constructorParams, ...methodParams] = params;
  const instance = constructor[0].toLowerCase() + constructor.slice(1);

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
    .map((x) => x.replace("<strong>Output:</strong> ", ""));

  return {
    exampleTestcases,
    exampleTestOutputs,
    functionName: metaData.name,
  };
}
