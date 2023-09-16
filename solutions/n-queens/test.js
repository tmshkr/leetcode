const { solveNQueens } = require("./solution.js");

test(`4`, () => {
  expect(solveNQueens(4)).toEqual([
    [".Q..", "...Q", "Q...", "..Q."],
    ["..Q.", "Q...", "...Q", ".Q.."],
  ]);
});

test(`1`, () => {
  expect(solveNQueens(1)).toEqual([["Q"]]);
});
