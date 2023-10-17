const { isInterleave } = require("./solution.js");

test(`"aabcc","dbbca","aadbbcbcac"`, () => {
  expect(isInterleave("aabcc","dbbca","aadbbcbcac")).toEqual(true);
});

test(`"aabcc","dbbca","aadbbbaccc"`, () => {
  expect(isInterleave("aabcc","dbbca","aadbbbaccc")).toEqual(false);
});

test(`"","",""`, () => {
  expect(isInterleave("","","")).toEqual(true);
});

