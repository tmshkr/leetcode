
const { firstUniqChar } = require("./solution.js");


test(`"leetcode"`, () => {
  const inputs = ["leetcode"];
  const expected = 0;
  const actual = firstUniqChar(...inputs);
  expect(actual).toEqual(expected);
});

test(`"loveleetcode"`, () => {
  const inputs = ["loveleetcode"];
  const expected = 2;
  const actual = firstUniqChar(...inputs);
  expect(actual).toEqual(expected);
});

test(`"aabb"`, () => {
  const inputs = ["aabb"];
  const expected = -1;
  const actual = firstUniqChar(...inputs);
  expect(actual).toEqual(expected);
});

