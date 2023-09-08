/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const used = new Set();

  const dfs = (path = []) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (const num of nums) {
      if (used.has(num)) continue;
      path.push(num);
      used.add(num);
      dfs(path);
      path.pop();
      used.delete(num);
    }
  };

  dfs();
  return res;
};

module.exports = { permute };

/*
https://leetcode.com/problems/permutations/
*/
