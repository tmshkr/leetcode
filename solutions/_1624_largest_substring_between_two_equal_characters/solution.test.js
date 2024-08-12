
const { maxLengthBetweenEqualCharacters } = require("./solution.js");


test(`"aa"`, () => {
  const inputs = ["aa"];
  const expected = 0;
  const actual = maxLengthBetweenEqualCharacters(...inputs);
  expect(actual).toEqual(expected);
});

test(`"abca"`, () => {
  const inputs = ["abca"];
  const expected = 2;
  const actual = maxLengthBetweenEqualCharacters(...inputs);
  expect(actual).toEqual(expected);
});

test(`"cbzxy"`, () => {
  const inputs = ["cbzxy"];
  const expected = -1;
  const actual = maxLengthBetweenEqualCharacters(...inputs);
  expect(actual).toEqual(expected);
});

