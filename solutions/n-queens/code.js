/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));
  const result = [];

  const backtrack = (row = 0) => {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) {
        continue;
      }

      cols.add(col);
      diag1.add(row + col);
      diag2.add(row - col);
      board[row][col] = "Q";

      backtrack(row + 1);

      cols.delete(col);
      diag1.delete(row + col);
      diag2.delete(row - col);
      board[row][col] = ".";
    }
  };

  backtrack();
  return result;
};

module.exports = { solveNQueens };

/*
https://leetcode.com/problems/n-queens/
*/
