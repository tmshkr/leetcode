const { reverseString } = require("./solution.js");

test(`["h","e","l","l","o"]`, () => {
  const s = ["h", "e", "l", "l", "o"];
  const expected = ["o", "l", "l", "e", "h"];
  reverseString(s);
  expect(s).toEqual(expected);
});

test(`["H","a","n","n","a","h"]`, () => {
  const s = ["H", "a", "n", "n", "a", "h"];
  const expected = ["h", "a", "n", "n", "a", "H"];
  reverseString(s);
  expect(s).toEqual(expected);
});
