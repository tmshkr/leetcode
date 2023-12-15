/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const complement = sum - k;
    if (map.has(complement)) {
      count += map.get(complement);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

module.exports = { subarraySum };

/*
https://leetcode.com/problems/subarray-sum-equals-k/
*/
