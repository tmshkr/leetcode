
const { maxVowels } = require("./solution.js");


test(`"abciiidef",3`, () => {
  const inputs = ["abciiidef", 3];
  const expected = 3;
  const actual = maxVowels(...inputs);
  expect(actual).toEqual(expected);
});

test(`"aeiou",2`, () => {
  const inputs = ["aeiou", 2];
  const expected = 2;
  const actual = maxVowels(...inputs);
  expect(actual).toEqual(expected);
});

test(`"leetcode",3`, () => {
  const inputs = ["leetcode", 3];
  const expected = 2;
  const actual = maxVowels(...inputs);
  expect(actual).toEqual(expected);
});

