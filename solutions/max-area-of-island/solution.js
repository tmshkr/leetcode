/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      dfs(i, j);
    }
  }

  function dfs(i, j, counter = { count: 0 }) {
    if (
      i < 0 ||
      j < 0 ||
      i === grid.length ||
      j === grid[i].length ||
      grid[i][j] === 0
    )
      return;

    counter.count++;
    max = Math.max(max, counter.count);
    grid[i][j] = 0;
    dfs(i + 1, j, counter);
    dfs(i - 1, j, counter);
    dfs(i, j + 1, counter);
    dfs(i, j - 1, counter);
  }

  return max;
};

module.exports = { maxAreaOfIsland };

/*
https://leetcode.com/problems/max-area-of-island/
*/
