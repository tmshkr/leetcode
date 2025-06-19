import * as fs from "fs";
import * as path from "path";
import { ParsedQuestion } from "../getQuestion";

export function createPythonFiles(parsedQuestion: ParsedQuestion) {
  const {
    codeSnippets,
    folderPath,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = parsedQuestion;

  console.log(`creating python files`);

  fs.writeFileSync(
    path.join(folderPath, "solution.py"),
    `
${codeSnippets.python3.code}
  
# https://leetcode.com/problems/${titleSlug}/
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
      self.assertEqual(${instance}.${methods[i]}(${convertPythonValues(
      methodParams[i],
      false
    )}), ${convertPythonValues(exampleTestOutputs[i], false)})`;
  }

  return `
import unittest
from solution import ${constructor}


class TestSolution(unittest.TestCase):
  def test_${constructor}(self):
      ${instance} = ${constructor}(${convertPythonValues(
    constructorParams,
    false
  )})
      ${calls}
        
         
if __name__ == "__main__":
  unittest.main()
`;
}

function generateFunctionTests(functionParams) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestInputs, exampleTestOutputs, functionName } =
    functionParams;

  return `
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
${exampleTestInputs.reduce((acc, cur, i) => {
    acc += `
    def test_${i}(self):
        s = Solution()
        inputs = [${cur}]
        expected = ${convertPythonValues(exampleTestOutputs[i])}
        actual = s.${functionName}(*inputs)
        self.assertEqual(actual, expected)
        
        `;
    return acc;
  }, "")}

if __name__ == "__main__":
  unittest.main()
`;
}

function convertPythonValues(val: any, stringify = true) {
  switch (val) {
    case null:
      return "None";
    case true:
      return "True";
    case false:
      return "False";
    default:
      return stringify ? JSON.stringify(val) : val;
  }
}
