
const { totalFruit } = require("./solution.js");


test(`[1,2,1]`, () => {
  const inputs = [[1, 2, 1]];
  const expected = 3;
  const actual = totalFruit(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0,1,2,2]`, () => {
  const inputs = [[0, 1, 2, 2]];
  const expected = 3;
  const actual = totalFruit(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,2,2]`, () => {
  const inputs = [[1, 2, 3, 2, 2]];
  const expected = 4;
  const actual = totalFruit(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,3,3,1,2,1,1,2,3,3,4]`, () => {
  const inputs = [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]];
  const expected = 5;
  const actual = totalFruit(...inputs);
  expect(actual).toEqual(expected);
});