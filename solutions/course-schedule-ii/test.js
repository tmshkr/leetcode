const { findOrder } = require("./solution.js");

test(`2,[[1,0]]`, () => {
  expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
});

test(`4,[[1,0],[2,0],[3,1],[3,2]]`, () => {
  expect(
    findOrder(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ])
  ).toEqual([0, 1, 2, 3]);
});

test(`1,[]`, () => {
  expect(findOrder(1, [])).toEqual([0]);
});

test(`6, [[0, 1], [0, 2], [1, 3], [3, 2], [4, 0], [5, 0]]`, () => {
  expect(
    findOrder(6, [
      [0, 1],
      [0, 2],
      [1, 3],
      [3, 2],
      [4, 0],
      [5, 0],
    ])
  ).toEqual([2, 3, 1, 0, 4, 5]);
});
