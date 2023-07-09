const { isPalindrome } = require("./code.js");

test(`"A man, a plan, a canal: Panama"`, () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test(`"race a car"`, () => {
  expect(isPalindrome("race a car")).toEqual(false);
});

test(`" "`, () => {
  expect(isPalindrome(" ")).toEqual(true);
});

