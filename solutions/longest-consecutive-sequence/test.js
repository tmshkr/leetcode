const { longestConsecutive } = require("./solution.js");

test(`[100,4,200,1,3,2]`, () => {
  expect(longestConsecutive([100,4,200,1,3,2])).toEqual(4);
});

test(`[0,3,7,2,5,8,4,6,0,1]`, () => {
  expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toEqual(9);
});

