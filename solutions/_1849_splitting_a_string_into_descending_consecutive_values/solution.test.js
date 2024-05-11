
const { splitString } = require("./solution.js");


test(`"1234"`, () => {
  const inputs = ["1234"];
  const expected = false;
  const actual = splitString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"050043"`, () => {
  const inputs = ["050043"];
  const expected = true;
  const actual = splitString(...inputs);
  expect(actual).toEqual(expected);
});

test(`"9080701"`, () => {
  const inputs = ["9080701"];
  const expected = false;
  const actual = splitString(...inputs);
  expect(actual).toEqual(expected);
});

