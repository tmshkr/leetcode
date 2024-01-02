const { minimumDifference } = require("./solution.js");

test(`[90],1`, () => {
  const inputs = [[90], 1];
  const expected = 0;
  const actual = minimumDifference(...inputs);
  expect(actual).toEqual(expected);
});

test(`[9,4,1,7],2`, () => {
  const inputs = [[9, 4, 1, 7], 2];
  const expected = 2;
  const actual = minimumDifference(...inputs);
  expect(actual).toEqual(expected);
});
