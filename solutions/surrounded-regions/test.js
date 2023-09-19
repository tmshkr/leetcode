const { solve } = require("./solution.js");

test(`[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]`, () => {
  const board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ];
  solve(board);
  expect(board).toEqual([
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
  ]);
});

test(`[["X"]]`, () => {
  const board = [["X"]];
  solve(board);
  expect(board).toEqual([["X"]]);
});
