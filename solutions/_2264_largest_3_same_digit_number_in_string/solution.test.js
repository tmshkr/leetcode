const { largestGoodInteger } = require("./solution.js");

test(`"6777133339"`, () => {
  const inputs = ["6777133339"];
  const expected = "777";
  const actual = largestGoodInteger(...inputs);
  expect(actual).toEqual(expected);
});

test(`"2300019"`, () => {
  const inputs = ["2300019"];
  const expected = "000";
  const actual = largestGoodInteger(...inputs);
  expect(actual).toEqual(expected);
});

test(`"42352338"`, () => {
  const inputs = ["42352338"];
  const expected = "";
  const actual = largestGoodInteger(...inputs);
  expect(actual).toEqual(expected);
});

test(`"222"`, () => {
  const inputs = ["222"];
  const expected = "222";
  const actual = largestGoodInteger(...inputs);
  expect(actual).toEqual(expected);
});
