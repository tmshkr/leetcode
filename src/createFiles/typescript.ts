import * as fs from "fs";
import * as path from "path";
import { ParsedQuestion } from "../getQuestion";

export function createTypeScriptFiles(parsedQuestion: ParsedQuestion) {
  const {
    codeSnippets,
    folderPath,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = parsedQuestion;

  console.log(`creating typescript files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.ts"),
    `
${codeSnippets.typescript.code}

export const solution = ${metaData.name || metaData.classname};

/*
https://leetcode.com/problems/${titleSlug}/
*/
`
  );

  if ("classname" in metaData) {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.ts"),
      generateClassTests(classParams)
    );
  } else {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.ts"),
      generateFunctionTests(functionParams, metaData)
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
import { test, expect } from "vitest";
import { solution as ${constructor} } from "./solution.ts";

test(\`${constructor}\`, () => {
  const ${instance} = new ${constructor}(${constructorParams});
${calls}
});
`;
}

function generateFunctionTests(functionParams, metaData) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestInputs, exampleTestOutputs, functionName } =
    functionParams;

  return `
import { test, expect } from "vitest";
import { solution as ${functionName} } from "./solution.ts";

${exampleTestInputs.reduce((acc, inputs, i) => {
  const paramNames = inputs.map(
    (_, j) => metaData.params[j]?.name || `arg${j}`
  );
  const expected =
    exampleTestOutputs[i] === undefined
      ? `undefined; // TODO: could not parse the expected output`
      : `${exampleTestOutputs[i]};`;

  acc += `
test(\`${inputs.toString().replace(/`/g, "\\`")}\`, () => {
${inputs
  .map((input, j) => `  const ${paramNames[j]} = ${input};`)
  .join("\n")}
  const expected = ${expected}
  const actual = ${functionName}(${paramNames.join(", ")});
  expect(actual).toEqual(expected);
});
`;
  return acc;
}, "")}
`;
}
