
const { hasAllCodes } = require("./solution.js");


test(`"00110110",2`, () => {
  const inputs = ["00110110",2];
  const expected = true;
  const actual = hasAllCodes(...inputs);
  expect(actual).toEqual(expected);
});

test(`"0110",1`, () => {
  const inputs = ["0110",1];
  const expected = true;
  const actual = hasAllCodes(...inputs);
  expect(actual).toEqual(expected);
});

test(`"0110",2`, () => {
  const inputs = ["0110",2];
  const expected = false;
  const actual = hasAllCodes(...inputs);
  expect(actual).toEqual(expected);
});

