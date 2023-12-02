import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createJavaScriptFiles(args: Args) {
  const { data, folderPath, metaData, classParams, functionParams } = args;

  console.log(`creating javascript files`);

  let testContent: string;
  let solutionContent: string;
  if ("classname" in metaData) {
    if (!classParams) throw new Error("classParams should be defined");
    const {
      constructor,
      constructorParams,
      exampleTestOutputs,
      instance,
      methodParams,
      methods,
    } = classParams;

    solutionContent = `
${data.question.codeSnippets.javascript}

module.exports = { ${constructor} };
  
/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;
    let calls = "";
    for (let i = 0; i < methods.length; i++) {
      calls += `
        expect(${instance}.${methods[i]}(${methodParams[i]}).toEqual(${exampleTestOutputs[i]}));`;
    }

    testContent = `
const { ${constructor} } = require("./solution.js");

test(\`${constructor}\`, () => {
  const ${instance} = ${constructor}(${constructorParams});
  ${calls}
});
`;
  } else {
    if (!functionParams) throw new Error("functionParams should be defined");
    const { exampleTestcases, exampleTestOutputs, functionName } =
      functionParams;
    solutionContent = `
${data.question.codeSnippets.javascript}

module.exports = { ${functionName} };
  
/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;

    testContent = `
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
  expect(actual).toBe(expected);
});
`;
  return acc;
}, "")}
`;
  }

  fs.writeFileSync(path.join(folderPath, "solution.js"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.js"), testContent);
}
