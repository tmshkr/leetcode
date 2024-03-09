import puppeteer from "puppeteer";
import { createFiles } from "./createFiles";
const problems = require("./problems.json");

export async function getProblem(argv) {
  let { titleSlug, number } = argv;
  if (Number(number)) {
    titleSlug = problems[number];
  }

  console.log(`getting ${titleSlug}`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    (await browser.userAgent()).replace("HeadlessChrome", "Chrome")
  );

  const res = {
    codeSnippets: {},
    exampleTestcaseList: [],
    metaData: {},
    questionContent: "",
    questionFrontendId: "",
    titleSlug,
  };

  page.on("response", (response) => {
    if (response.url().includes("graphql")) {
      const postData = JSON.parse(response.request().postData() || "{}");

      switch (postData.operationName) {
        case "consolePanelConfig":
          response.json().then(({ data }) => {
            res.questionFrontendId = data.question.questionFrontendId;
            res.metaData = JSON.parse(data.question.metaData);
            res.exampleTestcaseList = data.question.exampleTestcaseList;
          });
          break;
        case "questionContent":
          response.json().then(({ data }) => {
            res.questionContent = data.question.content;
          });
          break;
        case "questionEditorData":
          response.json().then(({ data }) => {
            res.codeSnippets = data.question.codeSnippets.reduce(
              (acc: any, cur: any) => {
                acc[cur.langSlug] = cur.code;
                return acc;
              },
              {}
            );
          });
          break;
        default:
          break;
      }
    }
  });

  await page.goto(`https://leetcode.com/problems/${titleSlug}/`);
  await page.waitForNetworkIdle();
  await browser.close();

  createFiles(res);
}
