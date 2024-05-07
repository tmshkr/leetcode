/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  backtrack([]);
  return result;

  function backtrack(perm) {
    if (perm.length === nums.length) {
      result.push([...perm]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      perm.push(nums[i]);
      backtrack(perm);
      visited[i] = false;
      perm.pop();
    }
  }
};

module.exports = { permuteUnique };

/*
https://leetcode.com/problems/permutations-ii/
*/
