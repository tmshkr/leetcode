
const { minOperations } = require("./solution.js");


test(`[1,1,4,2,3],5`, () => {
  const inputs = [[1, 1, 4, 2, 3], 5];
  const expected = 2;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

test(`[5,6,7,8,9],4`, () => {
  const inputs = [[5, 6, 7, 8, 9], 4];
  const expected = -1;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,2,20,1,1,3],10`, () => {
  const inputs = [[3, 2, 20, 1, 1, 3], 10];
  const expected = 5;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

