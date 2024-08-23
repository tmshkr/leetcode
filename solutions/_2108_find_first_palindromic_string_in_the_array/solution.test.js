const { firstPalindrome } = require("./solution.js");

test(`["abc","car","ada","racecar","cool"]`, () => {
  const inputs = [["abc", "car", "ada", "racecar", "cool"]];
  const expected = "ada";
  const actual = firstPalindrome(...inputs);
  expect(actual).toEqual(expected);
});

test(`["notapalindrome","racecar"]`, () => {
  const inputs = [["notapalindrome", "racecar"]];
  const expected = "racecar";
  const actual = firstPalindrome(...inputs);
  expect(actual).toEqual(expected);
});

test(`["def","ghi"]`, () => {
  const inputs = [["def", "ghi"]];
  const expected = "";
  const actual = firstPalindrome(...inputs);
  expect(actual).toEqual(expected);
});
