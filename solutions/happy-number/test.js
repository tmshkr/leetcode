const { isHappy } = require("./solution.js");

test(`19`, () => {
  expect(isHappy(19)).toEqual(true);
});

test(`2`, () => {
  expect(isHappy(2)).toEqual(false);
});

