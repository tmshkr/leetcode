
const { numOfMinutes } = require("./solution.js");


test(`1,0,[-1],[0]`, () => {
  const inputs = [1,0,[-1],[0]];
  const expected = 0;
  const actual = numOfMinutes(...inputs);
  expect(actual).toEqual(expected);
});

test(`6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]`, () => {
  const inputs = [6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]];
  const expected = 1;
  const actual = numOfMinutes(...inputs);
  expect(actual).toEqual(expected);
});

