import { createFiles } from "./createFiles";

const { request, gql } = require("graphql-request");
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

  createFiles(data);
}
