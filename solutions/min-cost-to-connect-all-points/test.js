const { minCostConnectPoints } = require("./solution.js");

test(`[[0,0],[2,2],[3,10],[5,2],[7,0]]`, () => {
  expect(
    minCostConnectPoints([
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ])
  ).toEqual(20);
});

test(`[[3,12],[-2,5],[-4,1]]`, () => {
  expect(
    minCostConnectPoints([
      [3, 12],
      [-2, 5],
      [-4, 1],
    ])
  ).toEqual(18);
});
