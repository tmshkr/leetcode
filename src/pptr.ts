import puppeteer from "puppeteer";

async function getProblem(slug: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    (await browser.userAgent()).replace("HeadlessChrome", "Chrome")
  );

  await page.setViewport({ width: 1080, height: 1024 });

  const res: {
    questionContent?: any;
    codeSnippets?: any;
    exampleTestcaseList?: any;
    metaData?: any;
    questionFrontendId?: string;
  } = {};

  page.on("response", (response) => {
    if (response.url().includes("graphql")) {
      const postData = JSON.parse(response.request().postData() || "{}");

      switch (postData.operationName) {
        case "consolePanelConfig":
          response.json().then(({ data }) => {
            res.questionFrontendId = data.question.questionFrontendId;
            res.metaData = JSON.parse(data.question.metaData);
            res.exampleTestcaseList =
              data.question.exampleTestcases.split("\n");
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

  await page.goto(`https://leetcode.com/problems/${slug}/`);
  await page.waitForNetworkIdle();

  await page.screenshot({ path: "example.png" });
  console.log(res);

  await browser.close();
}

getProblem("two-sum");
