import * as fs from "fs";
import { ParsedQuestion } from "../getQuestion";
import { createCppFiles } from "./cpp";
import { createGoFiles } from "./go";
import { createPhpFiles } from "./php";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";

export function createFiles(parsedQuestion: ParsedQuestion) {
  createFolder(parsedQuestion.folderPath);

  createCppFiles(parsedQuestion);
  createGoFiles(parsedQuestion);
  createJavaFiles(parsedQuestion);
  createJavaScriptFiles(parsedQuestion);
  createPhpFiles(parsedQuestion);
  createPythonFiles(parsedQuestion);
  console.log(`success!`);
}

export function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`deleted ${folderPath}`);
  }
  fs.mkdirSync(folderPath);
  console.log(`created ${folderPath}`);
}

