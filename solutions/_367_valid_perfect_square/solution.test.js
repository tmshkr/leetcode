
const { isPerfectSquare } = require("./solution.js");


test(`16`, () => {
  const inputs = [16];
  const expected = true;
  const actual = isPerfectSquare(...inputs);
  expect(actual).toEqual(expected);
});

test(`14`, () => {
  const inputs = [14];
  const expected = false;
  const actual = isPerfectSquare(...inputs);
  expect(actual).toEqual(expected);
});

