import * as fs from "fs";
import * as path from "path";

export function createPythonFiles({
  data,
  folderPath,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs,
  metaData,
}) {
  console.log(`creating python files`);
  if (Array.isArray(exampleTestOutputs)) {
    exampleTestOutputs = exampleTestOutputs.map((x) => {
      return ["true", "false"].includes(x)
        ? x[0].toUpperCase() + x.slice(1)
        : x;
    });
  }

  const solutionContent = `
${codeSnippets.python3}
      pass
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`;

  let testContent: string;
  if ("classname" in metaData) {
    console.log(exampleTestOutputs);
    exampleTestOutputs = JSON.parse(exampleTestOutputs);
    exampleTestOutputs.shift();
    const [functions, params] = exampleTestcases[0].map((x) => JSON.parse(x));
    const [constructor, ...methods] = functions;
    const [constructorParams, ...methodParams] = params;
    const instance = constructor[0].toLowerCase() + constructor.slice(1);
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
