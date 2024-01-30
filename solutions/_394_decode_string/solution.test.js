
const { decodeString } = require("./solution.js");


test(`"3[a]2[bc]"`, () => {
  const inputs = ["3[a]2[bc]"];
  const expected = "aaabcbc";
  const actual = decodeString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"3[a2[c]]"`, () => {
  const inputs = ["3[a2[c]]"];
  const expected = "accaccacc";
  const actual = decodeString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"2[abc]3[cd]ef"`, () => {
  const inputs = ["2[abc]3[cd]ef"];
  const expected = "abcabccdcdcdef";
  const actual = decodeString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"100[leetcode]"`, () => {
  const inputs = ["100[leetcode]"];
  const expected = "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode";
  const actual = decodeString(...inputs);
  expect(actual).toEqual(expected);
});