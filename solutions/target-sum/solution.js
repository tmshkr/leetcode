/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const cache = new Map();

  const recurse = (i, sum) => {
    if (i === nums.length) {
      return sum === target ? 1 : 0;
    }

    const key = `${i},${sum}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    cache.set(
      key,
      recurse(i + 1, sum + nums[i]) + recurse(i + 1, sum - nums[i])
    );
    return cache.get(key);
  };

  return recurse(0, 0);
};

module.exports = { findTargetSumWays };

/*
https://leetcode.com/problems/target-sum/
*/
