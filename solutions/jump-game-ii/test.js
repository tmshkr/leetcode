const { jump } = require("./solution.js");

test(`[2,3,1,1,4]`, () => {
  expect(jump([2,3,1,1,4])).toEqual(2);
});

test(`[2,3,0,1,4]`, () => {
  expect(jump([2,3,0,1,4])).toEqual(2);
});

