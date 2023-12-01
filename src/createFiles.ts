import * as fs from "fs";
import * as path from "path";

export function createFiles(data) {
  const { titleSlug, questionId } = data.question;
  const folderName = `_${questionId}_${titleSlug}`.replace(/-/g, "_");
  const folderPath = path.join("solutions", folderName);
  const metaData = JSON.parse(data.question.metaData);
  const functionName = metaData.name;
  const codeSnippets = data.question.codeSnippets.reduce((acc, cur) => {
    acc[cur.langSlug] = cur.code;
    return acc;
  }, {});

  const exampleTestcases: any[] = [];
  data.question.exampleTestcases.split("\n").reduce((acc, cur, i) => {
    acc.push(cur);
    if ((i + 1) % metaData.params.length === 0) {
      exampleTestcases.push(acc);
      acc = [];
    }
    return acc;
  }, []);

  try {
    if ("classname" in metaData) {
      var exampleTestOutputs = data.question.content.match(
        /<strong>Output<\/strong>\n(.*)/
      )[1];
    } else {
      var exampleTestOutputs = data.question.content
        .match(/<strong>Output:<\/strong> .+/g)
        .map((x) => x.replace("<strong>Output:</strong> ", ""));
    }
  } catch (err) {
    console.error("There was an error parsing the example test outputs");
    console.error(err);
  }

  const args = {
    data,
    folderPath,
    folderName,
    functionName,
    codeSnippets,
    exampleTestcases,
    exampleTestOutputs,
    metaData,
  };

  createFolder(folderPath);
  createJavaFiles(args);
  createJavaScriptFiles(args);
  createPythonFiles(args);

  console.log(`success!`);
}

function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`deleted ${folderPath}`);
  }
  fs.mkdirSync(folderPath);
  console.log(`created ${folderPath}`);
}

function createJavaFiles({
  data,
  folderPath,
  folderName,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs,
  metaData,
}) {
  console.log(`creating java files`);

  const solutionContent = `
package ${folderName};

${codeSnippets.java}

/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;

  const testContent = `
package ${folderName};

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  ${exampleTestcases.reduce((acc, cur, i) => {
    acc += `
    @Test
    @DisplayName('${cur}')
    void ${functionName}${i}() {
      Solution s = new Solution();
      // inputs = ${cur}
      // expected = ${
        Array.isArray(exampleTestOutputs)
          ? exampleTestOutputs[i]
          : exampleTestOutputs
      }
    }
    `;
    return acc;
  }, "")}
}
`;

  fs.writeFileSync(path.join(folderPath, "solution.java"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.java"), testContent);
}

function createJavaScriptFiles({
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

function createPythonFiles({
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

// TODO: improve param handling
function handleConstructorParams(metaData) {}
