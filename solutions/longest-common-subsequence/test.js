const { longestCommonSubsequence } = require("./solution.js");

test(`"abcde","ace"`, () => {
  expect(longestCommonSubsequence("abcde","ace")).toEqual(3  );
});

test(`"abc","abc"`, () => {
  expect(longestCommonSubsequence("abc","abc")).toEqual(3);
});

test(`"abc","def"`, () => {
  expect(longestCommonSubsequence("abc","def")).toEqual(0);
});

