const { isValid } = require("./code.js");

test(`"()"`, () => {
  expect(isValid("()")).toEqual(true);
});

test(`"()[]{}"`, () => {
  expect(isValid("()[]{}")).toEqual(true);
});

test(`"(]"`, () => {
  expect(isValid("(]")).toEqual(false);
});

