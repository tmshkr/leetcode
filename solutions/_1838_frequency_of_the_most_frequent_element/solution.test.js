
const { maxFrequency } = require("./solution.js");


test(`[1,2,4],5`, () => {
  const inputs = [[1, 2, 4], 5];
  const expected = 3;
  const actual = maxFrequency(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,4,8,13],5`, () => {
  const inputs = [[1, 4, 8, 13], 5];
  const expected = 2;
  const actual = maxFrequency(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,9,6],2`, () => {
  const inputs = [[3, 9, 6], 2];
  const expected = 1;
  const actual = maxFrequency(...inputs);
  expect(actual).toEqual(expected);
});

