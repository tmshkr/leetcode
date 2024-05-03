
const { reorganizeString } = require("./solution.js");


test(`"aab"`, () => {
  const inputs = ["aab"];
  const expected = "aba";
  const actual = reorganizeString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"aaab"`, () => {
  const inputs = ["aaab"];
  const expected = "";
  const actual = reorganizeString(...inputs);
  expect(actual).toEqual(expected);
});

