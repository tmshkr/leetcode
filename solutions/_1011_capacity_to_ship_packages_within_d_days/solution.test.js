
const { shipWithinDays } = require("./solution.js");


test(`[1,2,3,4,5,6,7,8,9,10],5`, () => {
  const inputs = [[1,2,3,4,5,6,7,8,9,10],5];
  const expected = 15;
  const actual = shipWithinDays(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,2,2,4,1,4],3`, () => {
  const inputs = [[3,2,2,4,1,4],3];
  const expected = 6;
  const actual = shipWithinDays(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,1,1],4`, () => {
  const inputs = [[1,2,3,1,1],4];
  const expected = 3;
  const actual = shipWithinDays(...inputs);
  expect(actual).toEqual(expected);
});

