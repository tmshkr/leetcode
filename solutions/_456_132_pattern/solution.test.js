
const { find132pattern } = require("./solution.js");


test(`[1,2,3,4]`, () => {
  const inputs = [[1,2,3,4]];
  const expected = false;
  const actual = find132pattern(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,1,4,2]`, () => {
  const inputs = [[3,1,4,2]];
  const expected = true;
  const actual = find132pattern(...inputs);
  expect(actual).toEqual(expected);
});

test(`[-1,3,2,0]`, () => {
  const inputs = [[-1,3,2,0]];
  const expected = true;
  const actual = find132pattern(...inputs);
  expect(actual).toEqual(expected);
});

