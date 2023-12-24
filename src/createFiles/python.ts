import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createPythonFiles(args: Args) {
  const { data, folderPath, metaData, classParams, functionParams } = args;

  console.log(`creating python files`);

  fs.writeFileSync(
    path.join(folderPath, "solution.py"),
    `
${data.question.codeSnippets.python3}
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`
  );

  if ("classname" in metaData) {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.py"),
      generateClassTests(classParams)
    );
  } else {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.py"),
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
    calls += `
      self.assertEqual(${instance}.${methods[i]}(${
      methodParams[i]
    }), ${convertPythonReturnValues(exampleTestOutputs[i])})`;
  }

  return `
import unittest
from solution import ${constructor}


class TestSolution(unittest.TestCase):
  def test_${constructor}(self):
      ${instance} = ${constructor}(${constructorParams})
      ${calls}
        
         
if __name__ == "__main__":
  unittest.main()
`;
}

function generateFunctionTests(functionParams) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestcases, exampleTestOutputs, functionName } = functionParams;

  return `
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
${exampleTestcases.reduce((acc, cur, i) => {
  acc += `
    def test_${i}(self):
        s = Solution()
        inputs = [${cur}]
        expected = ${convertPythonReturnValues(exampleTestOutputs[i])}
        actual = s.${functionName}(*inputs)
        self.assertEqual(actual, expected)
        
        `;
  return acc;
}, "")}

if __name__ == "__main__":
  unittest.main()
`;
}

function convertPythonReturnValues(val: any) {
  switch (val) {
    case null:
      return "None";
    case true:
      return "True";
    case false:
      return "False";
    default:
      return JSON.stringify(val);
  }
}
