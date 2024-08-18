
const { specialArray } = require("./solution.js");


test(`[3,5]`, () => {
  const inputs = [[3,5]];
  const expected = 2;
  const actual = specialArray(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0,0]`, () => {
  const inputs = [[0,0]];
  const expected = -1;
  const actual = specialArray(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0,4,3,0,4]`, () => {
  const inputs = [[0,4,3,0,4]];
  const expected = 3;
  const actual = specialArray(...inputs);
  expect(actual).toEqual(expected);
});

