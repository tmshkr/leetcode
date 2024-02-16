
const { searchRange } = require("./solution.js");


test(`[5,7,7,8,8,10],8`, () => {
  const inputs = [[5,7,7,8,8,10],8];
  const expected = [3,4];
  const actual = searchRange(...inputs);
  expect(actual).toEqual(expected);
});

test(`[5,7,7,8,8,10],6`, () => {
  const inputs = [[5,7,7,8,8,10],6];
  const expected = [-1,-1];
  const actual = searchRange(...inputs);
  expect(actual).toEqual(expected);
});

test(`[],0`, () => {
  const inputs = [[],0];
  const expected = [-1,-1];
  const actual = searchRange(...inputs);
  expect(actual).toEqual(expected);
});

