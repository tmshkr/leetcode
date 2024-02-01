
const { removeKdigits } = require("./solution.js");


test(`"1432219",3`, () => {
  const inputs = ["1432219", 3];
  const expected = "1219";
  const actual = removeKdigits(...inputs);
  expect(actual).toEqual(expected);
});

test(`"10200",1`, () => {
  const inputs = ["10200", 1];
  const expected = "200";
  const actual = removeKdigits(...inputs);
  expect(actual).toEqual(expected);
});

test(`"10",2`, () => {
  const inputs = ["10", 2];
  const expected = "0";
  const actual = removeKdigits(...inputs);
  expect(actual).toEqual(expected);
});

