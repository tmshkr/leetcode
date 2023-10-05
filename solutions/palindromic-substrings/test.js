const { countSubstrings } = require("./solution.js");

test(`"abc"`, () => {
  expect(countSubstrings("abc")).toEqual(3);
});

test(`"aaa"`, () => {
  expect(countSubstrings("aaa")).toEqual(6);
});

