const { numDistinct } = require("./solution.js");

test(`"rabbbit","rabbit"`, () => {
  expect(numDistinct("rabbbit","rabbit")).toEqual(3);
});

test(`"babgbag","bag"`, () => {
  expect(numDistinct("babgbag","bag")).toEqual(5);
});

