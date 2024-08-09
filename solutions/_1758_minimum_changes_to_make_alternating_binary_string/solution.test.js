
const { minOperations } = require("./solution.js");


test(`"0100"`, () => {
  const inputs = ["0100"];
  const expected = 1;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

test(`"10"`, () => {
  const inputs = ["10"];
  const expected = 0;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

test(`"1111"`, () => {
  const inputs = ["1111"];
  const expected = 2;
  const actual = minOperations(...inputs);
  expect(actual).toEqual(expected);
});

