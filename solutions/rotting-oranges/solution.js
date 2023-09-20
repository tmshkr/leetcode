/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let minutes = 0;
  let fresh = 0;
  let q = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) q.push([r, c]);
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (fresh > 0 && q.length > 0) {
    const newQ = [];
    for (const [r, c] of q) {
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (
          nr >= 0 &&
          nr < ROWS &&
          nc >= 0 &&
          nc < COLS &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          fresh--;
          newQ.push([nr, nc]);
        }
      }
    }
    q = newQ;
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};

module.exports = { orangesRotting };

/*
https://leetcode.com/problems/rotting-oranges/
*/
