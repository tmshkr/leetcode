/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dfs(i));
  }

  return max;

  function dfs(i) {
    if (manager[i] !== -1) {
      informTime[i] += dfs(manager[i]);
      manager[i] = -1;
    }
    return informTime[i];
  }
};

module.exports = { numOfMinutes };

/*
https://leetcode.com/problems/time-needed-to-inform-all-employees/
*/
