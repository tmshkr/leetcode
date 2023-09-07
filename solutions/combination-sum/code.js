/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  function dfs(i = 0, total = 0, cur = []) {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    cur.push(candidates[i]);
    dfs(i, total + candidates[i], cur);
    cur.pop();
    dfs(i + 1, total, cur);
  }

  dfs();
  return res;
};

module.exports = { combinationSum };

/*
https://leetcode.com/problems/combination-sum/
*/
