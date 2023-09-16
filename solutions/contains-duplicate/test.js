const { containsDuplicate } = require("./solution.js");

test("[1,2,3,1]", () => {
  expect(containsDuplicate([1,2,3,1])).toEqual(true);
});

test("[1,2,3,4]", () => {
  expect(containsDuplicate([1,2,3,4])).toEqual(false);
});

test("[1,1,1,3,3,4,3,2,4,2]", () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
});

