const { setZeroes } = require("./solution.js");

test(`[[1,1,1],[1,0,1],[1,1,1]]`, () => {
  const arr = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(arr);
  expect(arr).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});

test(`[[0,1,2,0],[3,4,5,2],[1,3,1,5]]`, () => {
  const arr = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(arr);
  expect(arr).toEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);
});
