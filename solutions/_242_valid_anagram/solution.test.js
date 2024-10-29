const { isAnagram } = require("./solution.js");

test(`"anagram","nagaram"`, () => {
  const inputs = ["anagram", "nagaram"];
  const expected = true;
  const actual = isAnagram(...inputs);
  expect(actual).toEqual(expected);
});

test(`"rat","car"`, () => {
  const inputs = ["rat", "car"];
  const expected = false;
  const actual = isAnagram(...inputs);
  expect(actual).toEqual(expected);
});
