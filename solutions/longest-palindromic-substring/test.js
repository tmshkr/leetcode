const { longestPalindrome } = require("./solution.js");

test(`"babad"`, () => {
  expect(longestPalindrome("babad")).toEqual("bab");
});

test(`"cbbd"`, () => {
  expect(longestPalindrome("cbbd")).toEqual("bb");
});
