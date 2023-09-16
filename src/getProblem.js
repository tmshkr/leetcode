const { request, gql } = require("graphql-request");
const fs = require("fs");
const path = require("path");
const problems = require("./problems.json");

async function getProblem(argv) {
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

  const folder = path.join("solutions", titleSlug);
  createFolder(folder);
  createFiles(data, folder);
}

function createFolder(folder) {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true });
    console.log(`deleted ${folder}`);
  }
  fs.mkdirSync(folder);
  console.log(`created ${folder}`);
}

function createFiles(data, folder) {
  const metaData = JSON.parse(data.question.metaData);
  const functionName = metaData.name;
  const codeSnippets = data.question.codeSnippets.reduce((acc, cur) => {
    acc[cur.langSlug] = cur.code;
    return acc;
  }, {});

  const exampleTestcases = [];
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

  createJavaScriptFiles(
    data,
    folder,
    functionName,
    codeSnippets,
    exampleTestcases,
    exampleTestOutputs
  );
  createPythonFiles(
    data,
    folder,
    functionName,
    codeSnippets,
    exampleTestcases,
    exampleTestOutputs
  );

  console.log(`success!`);
}

function createJavaScriptFiles(
  data,
  folder,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs
) {
  console.log(`creating javascript files`);
  fs.appendFileSync(
    path.join(folder, "solution.js"),
    codeSnippets["javascript"] +
      `\n\nmodule.exports = { ${functionName} };` +
      `\n\n/*\nhttps://leetcode.com/problems/${data.question.titleSlug}/\n*/\n`
  );

  fs.appendFileSync(
    path.join(folder, "test.js"),
    `const { ${functionName} } = require("./solution.js");\n\n`
  );

  exampleTestcases.forEach((test, i) => {
    fs.appendFileSync(
      path.join(folder, "test.js"),
      `test(\`${test}\`, () => {\n  expect(${functionName}(${test})).toEqual(${exampleTestOutputs[i]});\n});\n\n`
    );
  });
}

function createPythonFiles(
  data,
  folder,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs
) {
  console.log(`creating python files`);
  fs.appendFileSync(
    path.join(folder, "solution.py"),
    codeSnippets["python"] +
      `\n\n# https://leetcode.com/problems/${data.question.titleSlug}/\n`
  );

  const unitTests = exampleTestcases.reduce((acc, cur, i) => {
    acc += `\tdef test_${i}(self):\n\t\tself.assertEqual(s.${functionName}(${cur}), ${exampleTestOutputs[i]})\n\n`;
    return acc;
  }, "");

  fs.appendFileSync(
    path.join(folder, "test.py"),
    `import unittest\nfrom solution import Solution\n\ns = Solution()\n\n\nclass TestSolution(unittest.TestCase):\n${unitTests}\nif __name__ == "__main__":\n\tunittest.main()`
  );
}

module.exports = { getProblem };
