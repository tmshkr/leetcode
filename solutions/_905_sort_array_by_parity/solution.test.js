
const { sortArrayByParity } = require("./solution.js");


test(`[3,1,2,4]`, () => {
  const inputs = [[3,1,2,4]];
  const expected = [2,4,3,1];
  const actual = sortArrayByParity(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0]`, () => {
  const inputs = [[0]];
  const expected = [0];
  const actual = sortArrayByParity(...inputs);
  expect(actual).toEqual(expected);
});

