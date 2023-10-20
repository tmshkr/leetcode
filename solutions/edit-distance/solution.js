/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
};

module.exports = { minDistance };

/*
https://leetcode.com/problems/edit-distance/
*/
