/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      } else {
        result.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R--;
        }
        L++;
        R--;
      }
    }
  }
  return result;
};

module.exports = { threeSum };

/*
https://leetcode.com/problems/3sum/
*/
