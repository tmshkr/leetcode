const { numDecodings } = require("./solution.js");

test(`"12"`, () => {
  expect(numDecodings("12")).toEqual(2);
});

test(`"226"`, () => {
  expect(numDecodings("226")).toEqual(3);
});

test(`"06"`, () => {
  expect(numDecodings("06")).toEqual(0);
});

