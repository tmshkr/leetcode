const { checkValidString } = require("./solution.js");

test(`"()"`, () => {
  expect(checkValidString("()")).toEqual(true);
});

test(`"(*)"`, () => {
  expect(checkValidString("(*)")).toEqual(true);
});

test(`"(*))"`, () => {
  expect(checkValidString("(*))")).toEqual(true);
});

