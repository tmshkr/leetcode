import * as fs from "fs";
import * as path from "path";
import { ParsedQuestion } from "../getQuestion";

export function createJavaScriptFiles(parsedQuestion: ParsedQuestion) {
  const {
    codeSnippets,
    folderPath,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = parsedQuestion;

  console.log(`creating javascript files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.js"),
    `
${codeSnippets.javascript.code}

module.exports = { ${metaData.name || metaData.classname} };
  
/*
https://leetcode.com/problems/${titleSlug}/
*/
`
  );

  if ("classname" in metaData) {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.js"),
      generateClassTests(classParams)
    );
  } else {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.js"),
      generateFunctionTests(functionParams)
    );
  }
}

function generateClassTests(classParams) {
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
  for (let i = 0; i < methods.length; i++) {
    calls +=
      exampleTestOutputs[i] !== null
        ? `
  expect(${instance}.${methods[i]}(${methodParams[i]})).toEqual(${exampleTestOutputs[i]});`
        : `
  ${instance}.${methods[i]}(${methodParams[i]});`;
  }

  return `
import { describe, test, expect } from "vitest";
const { ${constructor} } = require("./solution.js");

test(\`${constructor}\`, () => {
const ${instance} = new ${constructor}(${constructorParams});
${calls}
});
`;
}

function generateFunctionTests(functionParams) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestInputs, exampleTestOutputs, functionName } =
    functionParams;

  return `
import { describe, test, expect } from "vitest";
const { ${functionName} } = require("./solution.js");

${exampleTestInputs.reduce((acc, cur, i) => {
    acc += `
test(\`${cur}\`, () => {
  const inputs = [${cur}];
  const expected = ${exampleTestOutputs[i]};
  const actual = ${functionName}(...inputs);
  expect(actual).toEqual(expected);
});
`;
    return acc;
  }, "")}
`;
}
