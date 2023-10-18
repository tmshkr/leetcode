const { longestIncreasingPath } = require("./solution.js");

test(`[[9,9,4],[6,6,8],[2,1,1]]`, () => {
  expect(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])).toEqual(4);
});

test(`[[3,4,5],[3,2,6],[2,2,1]]`, () => {
  expect(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])).toEqual(4);
});

test(`[[1]]`, () => {
  expect(longestIncreasingPath([[1]])).toEqual(1);
});

