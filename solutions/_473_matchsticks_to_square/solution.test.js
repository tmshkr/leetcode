
const { makesquare } = require("./solution.js");


test(`[1,1,2,2,2]`, () => {
  const inputs = [[1,1,2,2,2]];
  const expected = true;
  const actual = makesquare(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,3,3,3,4]`, () => {
  const inputs = [[3,3,3,3,4]];
  const expected = false;
  const actual = makesquare(...inputs);
  expect(actual).toEqual(expected);
});

