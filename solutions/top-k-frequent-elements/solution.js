/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counter = {};
  const freq = [];
  const result = [];

  for (const num of nums) {
    counter[num] = counter[num] + 1 || 1;
  }

  for (const key in counter) {
    const num = Number(key);
    const count = counter[key];
    if (freq[count]) {
      freq[count].push(num);
    } else {
      freq[count] = [num];
    }
  }

  for (let i = freq.length - 1; i >= 0; i--) {
    const nums = freq[i];
    for (let i = 0; i < nums?.length; i++) {
      result.push(nums[i]);
      if (result.length === k) {
        return result;
      }
    }
  }
};

module.exports = { topKFrequent };

/*
https://leetcode.com/problems/top-k-frequent-elements/
*/
