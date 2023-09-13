const { letterCombinations } = require("./code.js");

test(`"23"`, () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test(`""`, () => {
  expect(letterCombinations("")).toEqual([]);
});

test(`"2"`, () => {
  expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
});
