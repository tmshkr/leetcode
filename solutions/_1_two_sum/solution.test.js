
const { twoSum } = require("./solution.js");


test(`[2,7,11,15],9`, () => {
  const inputs = [[2,7,11,15],9];
  const expected = [0,1];
  const actual = twoSum(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,2,4],6`, () => {
  const inputs = [[3,2,4],6];
  const expected = [1,2];
  const actual = twoSum(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,3],6`, () => {
  const inputs = [[3,3],6];
  const expected = [0,1];
  const actual = twoSum(...inputs);
  expect(actual).toEqual(expected);
});

