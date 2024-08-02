
const { getRow } = require("./solution.js");


test(`3`, () => {
  const inputs = [3];
  const expected = [1,3,3,1];
  const actual = getRow(...inputs);
  expect(actual).toEqual(expected);
});

test(`0`, () => {
  const inputs = [0];
  const expected = [1];
  const actual = getRow(...inputs);
  expect(actual).toEqual(expected);
});

test(`1`, () => {
  const inputs = [1];
  const expected = [1,1];
  const actual = getRow(...inputs);
  expect(actual).toEqual(expected);
});

