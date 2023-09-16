/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Set());
  const cols = new Array(9).fill(0).map(() => new Set());
  const boxes = new Array(9).fill(0).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value === ".") continue;

      const b = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i].has(value) || cols[j].has(value) || boxes[b].has(value)) {
        return false;
      }

      rows[i].add(value);
      cols[j].add(value);
      boxes[b].add(value);
    }
  }
  return true;
};

module.exports = { isValidSudoku };

/*
https://leetcode.com/problems/valid-sudoku/
*/
