import { test, expect } from "vitest";
const { stringMatching } = require("./solution.js");

test(`["mass", "as", "hero", "superhero"]`, () => {
  const words = ["mass", "as", "hero", "superhero"];
  const expected = ["as", "hero"];
  const actual = stringMatching(words);
  expect([...actual].sort()).toEqual(expected.sort());
});

test(`["leetcode", "et", "code"]`, () => {
  const words = ["leetcode", "et", "code"];
  const expected = ["et", "code"];
  const actual = stringMatching(words);
  expect([...actual].sort()).toEqual(expected.sort());
});

test(`["blue", "green", "bu"]`, () => {
  const words = ["blue", "green", "bu"];
  const expected = [];
  const actual = stringMatching(words);
  expect([...actual].sort()).toEqual(expected.sort());
});
