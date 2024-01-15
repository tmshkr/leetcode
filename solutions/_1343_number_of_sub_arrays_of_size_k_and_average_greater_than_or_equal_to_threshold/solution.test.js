
const { numOfSubarrays } = require("./solution.js");


test(`[2,2,2,2,5,5,5,8],3,4`, () => {
  const inputs = [[2, 2, 2, 2, 5, 5, 5, 8], 3, 4];
  const expected = 3;
  const actual = numOfSubarrays(...inputs);
  expect(actual).toEqual(expected);
});

test(`[11,13,17,23,29,31,7,5,2,3],3,5`, () => {
  const inputs = [[11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5];
  const expected = 6;
  const actual = numOfSubarrays(...inputs);
  expect(actual).toEqual(expected);
});

