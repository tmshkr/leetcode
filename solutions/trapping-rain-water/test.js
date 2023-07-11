const { trap } = require("./code.js");

test(`[0,1,0,2,1,0,1,3,2,1,2,1]`, () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
});

test(`[4,2,0,3,2,5]`, () => {
  expect(trap([4,2,0,3,2,5])).toEqual(9);
});

