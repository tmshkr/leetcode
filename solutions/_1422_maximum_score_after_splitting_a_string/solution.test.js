
const { maxScore } = require("./solution.js");


test(`"011101"`, () => {
  const inputs = ["011101"];
  const expected = 5;
  const actual = maxScore(...inputs);
  expect(actual).toEqual(expected);
});

test(`"00111"`, () => {
  const inputs = ["00111"];
  const expected = 5;
  const actual = maxScore(...inputs);
  expect(actual).toEqual(expected);
});

test(`"1111"`, () => {
  const inputs = ["1111"];
  const expected = 3;
  const actual = maxScore(...inputs);
  expect(actual).toEqual(expected);
});

