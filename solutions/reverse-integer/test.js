const { reverse } = require("./solution.js");

test(`123`, () => {
  expect(reverse(123)).toEqual(321);
});

test(`-123`, () => {
  expect(reverse(-123)).toEqual(-321);
});

test(`120`, () => {
  expect(reverse(120)).toEqual(21);
});

