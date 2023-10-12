const { uniquePaths } = require("./solution.js");

test(`3,7`, () => {
  expect(uniquePaths(3,7)).toEqual(28);
});

test(`3,2`, () => {
  expect(uniquePaths(3,2)).toEqual(3);
});

