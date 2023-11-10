const { multiply } = require("./solution.js");

test(`"2","3"`, () => {
  expect(multiply("2","3")).toEqual("6");
});

test(`"123","456"`, () => {
  expect(multiply("123","456")).toEqual("56088");
});

