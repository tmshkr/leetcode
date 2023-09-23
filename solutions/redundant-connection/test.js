const { findRedundantConnection } = require("./solution.js");

test(`[[1,2],[1,3],[2,3]]`, () => {
  expect(findRedundantConnection([[1,2],[1,3],[2,3]])).toEqual([2,3]);
});

test(`[[1,2],[2,3],[3,4],[1,4],[1,5]]`, () => {
  expect(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])).toEqual([1,4]);
});

