const { isSubsequence } = require("./solution.js");

test(`"abc","ahbgdc"`, () => {
  expect(isSubsequence("abc","ahbgdc")).toEqual(true);
});

test(`"axc","ahbgdc"`, () => {
  expect(isSubsequence("axc","ahbgdc")).toEqual(false);
});

