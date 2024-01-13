const { numRescueBoats } = require("./solution.js");

test(`[1,2],3`, () => {
  const inputs = [[1, 2], 3];
  const expected = 1;
  const actual = numRescueBoats(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,2,2,1],3`, () => {
  const inputs = [[3, 2, 2, 1], 3];
  const expected = 3;
  const actual = numRescueBoats(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,5,3,4],5`, () => {
  const inputs = [[3, 5, 3, 4], 5];
  const expected = 4;
  const actual = numRescueBoats(...inputs);
  expect(actual).toEqual(expected);
});
