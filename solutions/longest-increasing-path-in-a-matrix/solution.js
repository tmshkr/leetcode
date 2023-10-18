/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  let max = 0;

  const dfs = (i, j, prev) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols) return 0;
    if (matrix[i][j] <= prev) return 0;
    if (dp[i][j] > 0) return dp[i][j];

    const curr = matrix[i][j];
    const top = dfs(i - 1, j, curr);
    const right = dfs(i, j + 1, curr);
    const bottom = dfs(i + 1, j, curr);
    const left = dfs(i, j - 1, curr);

    dp[i][j] = Math.max(top, right, bottom, left) + 1;
    max = Math.max(max, dp[i][j]);

    return dp[i][j];
  };

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      dfs(i, j, -1);
    }
  }

  return max;
};

module.exports = { longestIncreasingPath };

/*
https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
*/
