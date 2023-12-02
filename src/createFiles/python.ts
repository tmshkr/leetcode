import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createPythonFiles(args: Args) {
  const { data, folderPath, metaData, classParams, functionParams } = args;

  console.log(`creating python files`);
  const solutionContent = `
${data.question.codeSnippets.python3}
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`;

  let testContent: string;
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
    const testOutputs = exampleTestOutputs.map((x) =>
      convertPythonReturnValues(x)
    );
    let calls = "";
    for (let i = 0; i < methods.length; i++) {
      calls += `
        self.assertEqual(${instance}.${methods[i]}(${methodParams[i]}), ${testOutputs[i]})`;
    }

    testContent = `
import unittest
from solution import ${constructor}
  

class TestSolution(unittest.TestCase):
    def test_${constructor}(self):
        ${instance} = ${constructor}(${constructorParams})
        ${calls}
          
           
if __name__ == "__main__":
  unittest.main()
`;
  } else {
    if (!functionParams) throw new Error("functionParams should be defined");
    const { exampleTestcases, exampleTestOutputs, functionName } =
      functionParams;
    const testOutputs = exampleTestOutputs.map((x) =>
      convertPythonReturnValues(x)
    );

    testContent = `
import unittest
from solution import Solution
  
  
class TestSolution(unittest.TestCase):
  ${exampleTestcases.reduce((acc, cur, i) => {
    acc += `
      def test_${i}(self):
          s = Solution()
          inputs = [${cur}]
          expected = ${testOutputs[i]}
          actual = s.${functionName}(*inputs)
          self.assertEqual(actual, expected)
          
          `;
    return acc;
  }, "")}

if __name__ == "__main__":
  unittest.main()
`;
  }

  fs.writeFileSync(path.join(folderPath, "solution.py"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.py"), testContent);
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
      return val;
  }
}
