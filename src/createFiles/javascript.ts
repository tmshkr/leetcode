import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createJavaScriptFiles(args: Args) {
  const {
    codeSnippets,
    folderPath,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = args;

  console.log(`creating javascript files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.js"),
    `
${codeSnippets.javascript}

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
const { ${functionName} } = require("./solution.js");

${exampleTestInputs.reduce((acc, cur, i) => {
  acc += `
test(\`${cur}\`, () => {
  const inputs = [${cur}];
  const expected = ${JSON.stringify(exampleTestOutputs[i])};
  const actual = ${functionName}(...inputs);
  expect(actual).toEqual(expected);
});
`;
  return acc;
}, "")}
`;
}
