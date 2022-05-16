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
    function (argv) {
      const { titleSlug } = argv;
      console.log(`getting ${titleSlug}`);
      const query = gql`
        query questionData($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            questionId
            title
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

      request({
        url: "https://leetcode.com/graphql",
        document: query,
        variables: { titleSlug },
      }).then((data) => {
        const dir = path.join(__dirname, "problems", titleSlug);
        if (fs.existsSync(dir)) {
          return console.error("That directory already exists!");
        } else {
          fs.mkdirSync(dir);
        }

        const metaData = JSON.parse(data.question.metaData);
        const functionName = metaData.name;
        const { code } = data.question.codeSnippets.find(
          (x) => x.langSlug === "javascript"
        );

        fs.appendFileSync(
          path.join(dir, "index.js"),
          code + `\n\nmodule.exports = { ${functionName} };`
        );

        fs.appendFileSync(
          path.join(dir, "test.js"),
          `const { ${functionName} } = require("./index.js");\n\n`
        );

        const exampleTestcases = [];
        data.question.exampleTestcases.split("\n").reduce((acc, cur, i) => {
          acc.push(cur);
          if (i % 2 === 1) {
            exampleTestcases.push(acc);
            acc = [];
          }
          return acc;
        }, []);

        exampleTestcases.forEach((test) => {
          const [input, output] = test;
          fs.appendFileSync(
            path.join(dir, "test.js"),
            `test("${input}", () => {\n  expect(${functionName}(${input})).toEqual(${output});\n});\n\n`
          );
        });
      });
    }
  )
  .help().argv;
