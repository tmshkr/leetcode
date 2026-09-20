import * as fs from "fs";
import { ParsedQuestion } from "../getQuestion";
import { createCppFiles } from "./cpp";
import { createGoFiles } from "./go";
import { createPhpFiles } from "./php";
import { createPythonFiles } from "./python";
import { createJavaScriptFiles } from "./javascript";
import { createJavaFiles } from "./java";
import { createTypeScriptFiles } from "./typescript";

// LEETCODE_LANGUAGES selects which of these get created, e.g.,
// LEETCODE_LANGUAGES=typescript,python. Defaults to all of them.
const fileCreators = {
  cpp: createCppFiles,
  go: createGoFiles,
  java: createJavaFiles,
  javascript: createJavaScriptFiles,
  php: createPhpFiles,
  python: createPythonFiles,
  typescript: createTypeScriptFiles,
};

export type Language = keyof typeof fileCreators;

export function createFiles(
  parsedQuestion: ParsedQuestion,
  { force = false } = {}
) {
  const { folderPath } = parsedQuestion;
  if (fs.existsSync(folderPath) && !force) {
    throw new Error(
      `${folderPath} already exists; pass --force to delete it and start over`
    );
  }

  const languages = getLanguages();
  console.log(`creating files for ${languages.join(", ")}`);

  createFolder(folderPath);

  for (const language of languages) {
    fileCreators[language](parsedQuestion);
  }
  console.log(`success!`);
}

export function getLanguages(): Language[] {
  const supported = Object.keys(fileCreators) as Language[];
  const requested = (process.env.LEETCODE_LANGUAGES || "")
    .split(",")
    .map((language) => language.trim().toLowerCase())
    .filter(Boolean);

  if (!requested.length) return supported;

  const unsupported = requested.filter(
    (language) => !supported.includes(language as Language)
  );
  if (unsupported.length) {
    throw new Error(
      `unsupported LEETCODE_LANGUAGES value(s): ${unsupported.join(
        ", "
      )} (supported: ${supported.join(", ")})`
    );
  }

  return supported.filter((language) => requested.includes(language));
}

export function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`deleted ${folderPath}`);
  }
  fs.mkdirSync(folderPath);
  console.log(`created ${folderPath}`);
}
