const { longestCommonPrefix } = require("./solution.js");

test(`["flower","flow","flight"]`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});

test(`["dog","racecar","car"]`, () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
});
