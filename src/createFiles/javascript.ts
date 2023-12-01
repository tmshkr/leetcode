import * as fs from "fs";
import * as path from "path";

export function createJavaScriptFiles({
  data,
  folderPath,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs,
  metaData,
}) {
  console.log(`creating javascript files`);

  const solutionContent = `
${codeSnippets.javascript}
  
module.exports = { ${functionName} };

/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;

  const testContent = `
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

  fs.writeFileSync(path.join(folderPath, "solution.js"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.js"), testContent);
}
