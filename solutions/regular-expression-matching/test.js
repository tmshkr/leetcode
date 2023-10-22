const { isMatch } = require("./solution.js");

test(`"aa","a"`, () => {
  expect(isMatch("aa","a")).toEqual(false);
});

test(`"aa","a*"`, () => {
  expect(isMatch("aa","a*")).toEqual(true);
});

test(`"ab",".*"`, () => {
  expect(isMatch("ab",".*")).toEqual(true);
});

