/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length + 1).fill(0);

  for (const row of triangle.reverse()) {
    for (let i = 0; i < row.length; i++) {
      dp[i] = row[i] + Math.min(dp[i], dp[i + 1]);
    }
  }

  return dp[0];
};

module.exports = { minimumTotal };

/*
https://leetcode.com/problems/triangle/
*/
