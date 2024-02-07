
const { sortedSquares } = require("./solution.js");


test(`[-4,-1,0,3,10]`, () => {
  const inputs = [[-4,-1,0,3,10]];
  const expected = [0,1,9,16,100];
  const actual = sortedSquares(...inputs);
  expect(actual).toEqual(expected);
});

test(`[-7,-3,2,3,11]`, () => {
  const inputs = [[-7,-3,2,3,11]];
  const expected = [4,9,9,49,121];
  const actual = sortedSquares(...inputs);
  expect(actual).toEqual(expected);
});

