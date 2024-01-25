
const { removeStars } = require("./solution.js");


test(`"leet**cod*e"`, () => {
  const inputs = ["leet**cod*e"];
  const expected = "lecoe";
  const actual = removeStars(...inputs);
  expect(actual).toEqual(expected);
});

test(`"erase*****"`, () => {
  const inputs = ["erase*****"];
  const expected = "";
  const actual = removeStars(...inputs);
  expect(actual).toEqual(expected);
});

