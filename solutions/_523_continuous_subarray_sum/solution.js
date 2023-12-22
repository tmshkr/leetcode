/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0;
  let map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum %= k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};

module.exports = { checkSubarraySum };

/*
https://leetcode.com/problems/continuous-subarray-sum/
*/
