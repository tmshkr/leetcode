const { minWindow } = require("./code.js");

test(`"ADOBECODEBANC","ABC"`, () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC");
});

test(`"a","a"`, () => {
  expect(minWindow("a", "a")).toEqual("a");
});

test(`"a","aa"`, () => {
  expect(minWindow("a", "aa")).toEqual("");
});
