import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createCppFiles(args: Args) {
  const {
    codeSnippets,
    folderPath,
    folderName,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = args;

  console.log(`symlinking CMakeLists.txt`);
  const rootDir = process.cwd();
  process.chdir(folderPath);
  fs.symlinkSync("../../CMakeLists.txt", "CMakeLists.txt");
  process.chdir(rootDir);

  console.log(`creating c++ files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.cpp"),
    `
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;
  
${codeSnippets.cpp}
  
/*
https://leetcode.com/problems/${titleSlug}/
*/`
  );

  if ("classname" in metaData) {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.cpp"),
      generateClassTests(classParams, folderName)
    );
  } else {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.cpp"),
      generateFunctionTests(functionParams, folderName)
    );
  }
}

function generateClassTests(classParams, folderName) {
  if (!classParams) throw new Error("classParams should be defined");
  const {
    constructor,
    constructorParams,
    exampleTestOutputs,
    instance,
    methodParams,
    methods,
  } = classParams;

  let calls = "";
  // TODO: implement this
  return "";
}

function generateFunctionTests(functionParams, folderName) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestInputs, exampleTestOutputs, functionName } =
    functionParams;

  return `
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

${exampleTestInputs.reduce((acc, cur, i) => {
  acc += `
TEST(SolutionTest, Test${i + 1})
{
  Solution s;
  // inputs = ${cur}
  // expected = ${exampleTestOutputs[i]}
}
  `;
  return acc;
}, "")}`;
}
