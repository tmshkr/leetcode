const { getConcatenation } = require("./solution.js");

test(`[1,2,1]`, () => {
  expect(getConcatenation([1,2,1])).toEqual([1,2,1,1,2,1]);
});

test(`[1,3,2,1]`, () => {
  expect(getConcatenation([1,3,2,1])).toEqual([1,3,2,1,1,3,2,1]);
});

