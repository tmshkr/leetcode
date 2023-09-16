const { isValid } = require("./solution.js");

test(`"()"`, () => {
  expect(isValid("()")).toEqual(true);
});

test(`"()[]{}"`, () => {
  expect(isValid("()[]{}")).toEqual(true);
});

test(`"(]"`, () => {
  expect(isValid("(]")).toEqual(false);
});

