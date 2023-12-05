import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createJavaScriptFiles(args: Args) {
  const { data, folderPath, metaData, classParams, functionParams } = args;

  console.log(`creating javascript files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.js"),
    `
  ${data.question.codeSnippets.javascript}
  
  module.exports = { ${metaData.name || metaData.classname} };
    
  /*
  https://leetcode.com/problems/${data.question.titleSlug}/
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
    calls += exampleTestOutputs[i]
      ? `
  expect(${instance}.${methods[i]}(${methodParams[i]})).toEqual(${exampleTestOutputs[i]});`
      : `
  ${instance}.${methods[i]}(${methodParams[i]})`;
  }

  return `
const { ${constructor} } = require("./solution.js");

test(\`${constructor}\`, () => {
const ${instance} = new ${constructor}(${constructorParams});
${calls}
});
`;
}

function generateFunctionTests(functionParams) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestcases, exampleTestOutputs, functionName } = functionParams;

  return `
const { ${functionName} } = require("./solution.js");

${exampleTestcases.reduce((acc, cur, i) => {
  acc += `
test(\`${cur}\`, () => {
const inputs = [${cur}];
const expected = ${
    Array.isArray(exampleTestOutputs)
      ? exampleTestOutputs[i]
      : exampleTestOutputs
  };
const actual = ${functionName}(...inputs);
expect(actual).toEqual(expected);
});
`;
  return acc;
}, "")}
`;
}
