const yargs = require("yargs");
const { request, gql } = require("graphql-request");
const fs = require("fs");
const path = require("path");

yargs
  .command(
    "get <titleSlug>",
    "get leetcode problem",
    (yargs) => {
      yargs.positional("titleSlug", {
        type: "string",
        describe: "the title slug of the problem to get, e.g., 'two-sum'",
      });
    },
    getProblem
  )
  .help().argv;

async function getProblem(argv) {
  const { titleSlug } = argv;
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

  const folder = path.join(__dirname, "problems", titleSlug);
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
  const { code } = data.question.codeSnippets.find(
    (x) => x.langSlug === "javascript"
  );

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

  fs.appendFileSync(
    path.join(folder, "index.js"),
    code +
      `\n\nmodule.exports = { ${functionName} };` +
      `\n\n/*\nhttps://leetcode.com/problems/${data.question.titleSlug}/\n*/\n`
  );

  fs.appendFileSync(
    path.join(folder, "test.js"),
    `const { ${functionName} } = require("./index.js");\n\n`
  );

  exampleTestcases.forEach((test, i) => {
    fs.appendFileSync(
      path.join(folder, "test.js"),
      `test("${test}", () => {\n  expect(${functionName}(${test})).toEqual(${exampleTestOutputs[i]});\n});\n\n`
    );
  });

  console.log(`success!`);
}
