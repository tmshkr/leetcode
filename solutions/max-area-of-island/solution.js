/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const visited = Array.from(grid, ({ length }) => Array(length).fill(false));
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i === grid.length ||
      j === grid[i].length ||
      visited[i][j] ||
      grid[i][j] === 0
    )
      return 0;

    visited[i][j] = true;
    return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  }

  return max;
};

module.exports = { maxAreaOfIsland };

/*
https://leetcode.com/problems/max-area-of-island/
*/
