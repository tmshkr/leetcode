import { describe, test, expect } from "vitest";
const { containsDuplicate } = require("./solution.js");


test(`[1,2,3,1]`, () => {
  const inputs = [[1, 2, 3, 1]];
  const expected = true;
  const actual = containsDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,4]`, () => {
  const inputs = [[1, 2, 3, 4]];
  const expected = false;
  const actual = containsDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1,1,3,3,4,3,2,4,2]`, () => {
  const inputs = [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]];
  const expected = true;
  const actual = containsDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

