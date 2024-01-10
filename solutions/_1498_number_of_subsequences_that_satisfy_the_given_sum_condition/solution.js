/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  const mod = 1e9 + 7;
  let count = 0;
  let l = 0;
  let r = nums.length - 1;

  const pow = [1];
  for (let i = 1; i < nums.length; i++) {
    pow.push((pow[pow.length - 1] * 2) % mod);
  }

  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      count = (count + pow[r - l]) % mod;
      l++;
    }
  }
  return count;
};

module.exports = { numSubseq };

/*
https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
*/
