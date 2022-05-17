const { request, gql } = require("graphql-request");
const fs = require("fs");
const path = require("path");

async function updateProblemList() {
  console.log(`updating problem list`);
  const query = gql`
    query problemsetQuestionList(
      $categorySlug: String
      $limit: Int
      $skip: Int
      $filters: QuestionListFilterInput
    ) {
      problemsetQuestionList: questionList(
        categorySlug: $categorySlug
        limit: $limit
        skip: $skip
        filters: $filters
      ) {
        total: totalNum
        questions: data {
          frontendQuestionId: questionFrontendId
          titleSlug
        }
      }
    }
  `;

  const totalQuestions = await request({
    url: "https://leetcode.com/graphql",
    document: query,
    variables: {
      categorySlug: "",
      skip: 0,
      limit: 1,
      filters: {},
    },
  }).then((data) => data.problemsetQuestionList.total);

  const allQuestions = await request({
    url: "https://leetcode.com/graphql",
    document: query,
    variables: {
      categorySlug: "",
      skip: 0,
      limit: totalQuestions,
      filters: {},
    },
  });

  const list = allQuestions.problemsetQuestionList.questions.reduce(
    (acc, cur) => {
      acc[cur.frontendQuestionId] = cur.titleSlug;
      return acc;
    },
    {}
  );

  fs.writeFileSync(
    path.join(__dirname, "problems.json"),
    JSON.stringify(list, null, 2) + "\n"
  );
}

module.exports = { updateProblemList };
