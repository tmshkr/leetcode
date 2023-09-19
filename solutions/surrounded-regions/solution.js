/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const ROWS = board.length;
  const COLS = board[0].length;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return;
    if (board[row][col] !== "O") return;

    board[row][col] = "N";
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let row = 0; row < ROWS; row++) {
    dfs(row, 0);
    dfs(row, COLS - 1);
  }

  for (let col = 0; col < COLS; col++) {
    dfs(0, col);
    dfs(ROWS - 1, col);
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      board[row][col] = board[row][col] === "N" ? "O" : "X";
    }
  }
};

module.exports = { solve };

/*
https://leetcode.com/problems/surrounded-regions/
*/
