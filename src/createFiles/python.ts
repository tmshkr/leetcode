import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createPythonFiles(args: Args) {
  const { data, folderPath, metaData, classParams, functionParams } = args;

  console.log(`creating python files`);
  const solutionContent = `
${data.codeSnippets.python3}
      pass
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`;

  let testContent: string;
  if ("classname" in metaData) {
    if (!classParams) throw new Error("classParams should be defined");
    const {
      constructor,
      constructorParams,
      exampleTestcases,
      exampleTestOutputs,
      instance,
      methodParams,
      methods,
    } = classParams;
    let calls = "";
    for (let i = 0; i < methods.length; i++) {
      calls += exampleTestOutputs[i]
        ? `
        self.assertEqual(${instance}.${methods[i]}(${methodParams[i]}), ${exampleTestOutputs[i]})
        `
        : `
        ${instance}.${methods[i]}(${methodParams[i]})
        `;
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
    let { exampleTestcases, exampleTestOutputs, functionName } = functionParams;
    exampleTestOutputs = exampleTestOutputs.map((x) => {
      return ["true", "false"].includes(x)
        ? x[0].toUpperCase() + x.slice(1)
        : x;
    });
    testContent = `
import unittest
from solution import Solution
  
  
class TestSolution(unittest.TestCase):
  ${exampleTestcases.reduce((acc, cur, i) => {
    acc += `
      def test_${i}(self):
          s = Solution()
          inputs = [${cur}]
          expected = ${exampleTestOutputs[i]}
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
