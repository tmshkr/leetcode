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
  const functionName = metaData.name;
  const codeSnippets = data.question.codeSnippets.reduce((acc, cur) => {
    acc[cur.langSlug] = cur.code;
    return acc;
  }, {});

  let exampleTestcases: any[] = [];
  let exampleTestOutputs: any[] = [];
  try {
    if ("classname" in metaData) {
      exampleTestcases = data.question.exampleTestcases
        .split("\n")
        .map((x) => JSON.parse(x));
      exampleTestOutputs = data.question.content.match(
        /<strong>Output<\/strong>\n(.*)/
      )[1];
    } else {
      data.question.exampleTestcases.split("\n").reduce((acc, cur, i) => {
        acc.push(cur);
        if ((i + 1) % metaData.params.length === 0) {
          exampleTestcases.push(acc);
          acc = [];
        }
        return acc;
      }, []);
      exampleTestOutputs = data.question.content
        .match(/<strong>Output:<\/strong> .+/g)
        .map((x) => x.replace("<strong>Output:</strong> ", ""));
    }
  } catch (err) {
    console.error("There was an error parsing the example test outputs");
    console.error(err);
  }

  const args = {
    data,
    folderPath,
    folderName,
    functionName,
    codeSnippets,
    exampleTestcases,
    exampleTestOutputs,
    metaData,
  };

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
