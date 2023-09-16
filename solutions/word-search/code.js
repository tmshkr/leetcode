/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const VISITED = Array.from(Array(ROWS), () => Array(COLS).fill(false));

  const dfs = (row, col, index) => {
    if (index === word.length) {
      return true;
    }

    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
      return false;
    }

    if (VISITED[row][col]) {
      return false;
    }

    if (board[row][col] !== word[index]) {
      return false;
    }

    VISITED[row][col] = true;

    const result =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    VISITED[row][col] = false;

    return result;
  };

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

module.exports = { exist };

/*
https://leetcode.com/problems/word-search/
*/
