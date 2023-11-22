import * as fs from "fs";
const { request, gql } = require("graphql-request");
const path = require("path");
const problems = require("./problems.json");

export async function getProblem(argv) {
  let { titleSlug, number } = argv;
  if (Number(number)) {
    titleSlug = problems[number];
  }

  console.log(`getting ${titleSlug}`);

  const query = gql`
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        title
        titleSlug
        content
        codeSnippets {
          lang
          langSlug
          code
        }
        exampleTestcases
        sampleTestCase
        metaData
      }
    }
  `;

  const data = await request({
    url: "https://leetcode.com/graphql",
    document: query,
    variables: { titleSlug },
  });

  const folderName = `_${data.question.questionId}_${titleSlug}`.replace(
    /-/g,
    "_"
  );
  const folderPath = path.join("solutions", folderName);

  createFolder(folderPath);
  createFiles(data, folderPath, folderName);
}

function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`deleted ${folderPath}`);
  }
  fs.mkdirSync(folderPath);
  console.log(`created ${folderPath}`);
}

function createFiles(data, folderPath, folderName) {
  const metaData = JSON.parse(data.question.metaData);
  const functionName = metaData.name;
  const codeSnippets = data.question.codeSnippets.reduce((acc, cur) => {
    acc[cur.langSlug] = cur.code;
    return acc;
  }, {});

  const exampleTestcases: any = [];
  data.question.exampleTestcases.split("\n").reduce((acc, cur, i) => {
    acc.push(cur);
    if ((i + 1) % metaData.params.length === 0) {
      exampleTestcases.push(acc);
      acc = [];
    }
    return acc;
  }, []);

  const exampleTestOutputs = data.question.content
    .match(/<strong>Output:<\/strong> .+/g)
    .map((x) => x.replace("<strong>Output:</strong> ", ""));

  const args = {
    data,
    folderPath,
    folderName,
    functionName,
    codeSnippets,
    exampleTestcases,
    exampleTestOutputs,
  };

  createJavaFiles(args);
  createJavaScriptFiles(args);
  createPythonFiles(args);

  console.log(`success!`);
}

function createJavaFiles({
  data,
  folderPath,
  folderName,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs,
}) {
  console.log(`creating java files`);

  const solutionContent = `
package ${folderName};

${codeSnippets["java"]}

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
    @DisplayName("${cur}")
    void ${functionName}${i}() {
      Solution s = new Solution();
      // inputs = ${cur}
      // expected = ${exampleTestOutputs[i]}
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
}) {
  console.log(`creating javascript files`);

  const solutionContent = `
${codeSnippets["javascript"]}
  
module.exports = { ${functionName} };

/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;

  let testContent = `const { ${functionName} } = require("./solution.js");\n`;

  exampleTestcases.forEach((test, i) => {
    testContent += `    
test(\`${test}\`, () => {
  expect(${functionName}(${test})).toEqual(${exampleTestOutputs[i]});
});
`;
  });

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
}) {
  console.log(`creating python files`);
  const solutionContent = `
${codeSnippets["python3"]}
  
# https://leetcode.com/problems/${data.question.titleSlug}/
`;

  const testContent = `
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
${exampleTestcases.reduce((acc, cur, i) => {
  acc += `
    def test_${i}(self):
        s = Solution()
        self.assertEqual(s.${functionName}(${cur}), ${exampleTestOutputs[i]})
        
        `;
  return acc;
}, "")}

if __name__ == "__main__":
  unittest.main()
`;

  fs.writeFileSync(path.join(folderPath, "solution.py"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.py"), testContent);
}
