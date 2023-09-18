/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const ROWS = heights.length;
  const COLS = heights[0].length;
  const pac = new Set();
  const atl = new Set();

  function dfs(r, c, visited, prevHeight) {
    if (
      visited.has(`${r},${c}`) ||
      r < 0 ||
      c < 0 ||
      r === ROWS ||
      c === COLS ||
      heights[r][c] < prevHeight
    )
      return;

    visited.add(`${r},${c}`);
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }

  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
  }
  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
  }

  const res = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
        res.push([r, c]);
      }
    }
  }

  return res;
};

module.exports = { pacificAtlantic };

/*
https://leetcode.com/problems/pacific-atlantic-water-flow/
*/
