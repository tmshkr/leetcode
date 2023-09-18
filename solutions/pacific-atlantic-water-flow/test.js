const { pacificAtlantic } = require("./solution.js");

test(`[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]`, () => {
  const res = pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]);
  expect(res).toEqual([
    [0, 4],
    [1, 3],
    [1, 4],
    [2, 2],
    [3, 0],
    [3, 1],
    [4, 0],
  ]);
});

test(`[[1]]`, () => {
  const res = pacificAtlantic([[1]]);
  expect(res).toEqual([[0, 0]]);
});
