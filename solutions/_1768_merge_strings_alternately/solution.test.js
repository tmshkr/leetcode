const { mergeAlternately } = require("./solution.js");

test(`"abc","pqr"`, () => {
  const inputs = ["abc", "pqr"];
  const expected = "apbqcr";
  const actual = mergeAlternately(...inputs);
  expect(actual).toEqual(expected);
});

test(`"ab","pqrs"`, () => {
  const inputs = ["ab", "pqrs"];
  const expected = "apbqrs";
  const actual = mergeAlternately(...inputs);
  expect(actual).toEqual(expected);
});

test(`"abcd","pq"`, () => {
  const inputs = ["abcd", "pq"];
  const expected = "apbqcd";
  const actual = mergeAlternately(...inputs);
  expect(actual).toEqual(expected);
});
