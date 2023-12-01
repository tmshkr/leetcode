import * as fs from "fs";
import * as path from "path";

export function createPythonFiles({ data, folderPath, metaData, params }) {
  console.log(`creating python files`);

  const solutionContent = `
${data.codeSnippets.find((item) => item.langSlug === "python3")}
      pass
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`;

  let testContent: string;
  if ("classname" in metaData) {
    const {
      constructor,
      constructorParams,
      exampleTestcases,
      exampleTestOutputs,
      instance,
      methodParams,
      methods,
    } = params;
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
    let { exampleTestcases, exampleTestOutputs, functionName } = params;
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
