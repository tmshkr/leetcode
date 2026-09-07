import { describe, test, expect } from "vitest";
const { groupAnagrams } = require("./solution.js");

test(`["eat","tea","tan","ate","nat","bat"]`, () => {
  const inputs = [["eat", "tea", "tan", "ate", "nat", "bat"]];
  const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
  const actual = groupAnagrams(...inputs);
  const sortedActual = actual
    .map((group) => group.sort())
    .sort((a, b) => a.length - b.length);
  expect(sortedActual).toEqual(expected);
});

test(`[""]`, () => {
  const inputs = [[""]];
  const expected = [[""]];
  const actual = groupAnagrams(...inputs);
  const sortedActual = actual
    .map((group) => group.sort())
    .sort((a, b) => a.length - b.length);
  expect(sortedActual).toEqual(expected);
});

test(`["a"]`, () => {
  const inputs = [["a"]];
  const expected = [["a"]];
  const actual = groupAnagrams(...inputs);
  const sortedActual = actual
    .map((group) => group.sort())
    .sort((a, b) => a.length - b.length);
  expect(sortedActual).toEqual(expected);
});
