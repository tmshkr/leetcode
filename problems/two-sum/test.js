const { twoSum } = require("./index.js");

test("[2,7,11,15]", () => {
  expect(twoSum([2,7,11,15])).toEqual(9);
});

test("[3,2,4]", () => {
  expect(twoSum([3,2,4])).toEqual(6);
});

test("[3,3]", () => {
  expect(twoSum([3,3])).toEqual(6);
});

