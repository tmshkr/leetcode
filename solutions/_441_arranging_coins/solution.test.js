
const { arrangeCoins } = require("./solution.js");


test(`5`, () => {
  const inputs = [5];
  const expected = 2;
  const actual = arrangeCoins(...inputs);
  expect(actual).toEqual(expected);
});

test(`8`, () => {
  const inputs = [8];
  const expected = 3;
  const actual = arrangeCoins(...inputs);
  expect(actual).toEqual(expected);
});

test(`1`, () => {
  const inputs = [1];
  const expected = 1;
  const actual = arrangeCoins(...inputs);
  expect(actual).toEqual(expected);
});

