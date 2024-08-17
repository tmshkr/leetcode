
const { timeRequiredToBuy } = require("./solution.js");


test(`[2,3,2],2`, () => {
  const inputs = [[2,3,2],2];
  const expected = 6;
  const actual = timeRequiredToBuy(...inputs);
  expect(actual).toEqual(expected);
});

test(`[5,1,1,1],0`, () => {
  const inputs = [[5,1,1,1],0];
  const expected = 8;
  const actual = timeRequiredToBuy(...inputs);
  expect(actual).toEqual(expected);
});

