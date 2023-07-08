const { isAnagram } = require("./code.js");

test(`"anagram","nagaram"`, () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});

test(`"rat","car"`, () => {
  expect(isAnagram("rat", "car")).toEqual(false);
});
