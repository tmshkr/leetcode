const { searchMatrix } = require("./solution.js");

test(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]],3`, () => {
  expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)).toEqual(true);
});

test(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]],13`, () => {
  expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13)).toEqual(false);
});

