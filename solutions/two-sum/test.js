const { twoSum } = require("./solution.js");

test("[2,7,11,15],9", () => {
  expect(twoSum([2,7,11,15],9)).toEqual([0,1]);
});

test("[3,2,4],6", () => {
  expect(twoSum([3,2,4],6)).toEqual([1,2]);
});

test("[3,3],6", () => {
  expect(twoSum([3,3],6)).toEqual([0,1]);
});

