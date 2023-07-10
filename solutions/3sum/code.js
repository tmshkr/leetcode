/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const s = new Set();

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        s.add(JSON.stringify([nums[i], nums[l], nums[r]]));
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return Array.from(s).map(JSON.parse);
};

module.exports = { threeSum };

/*
https://leetcode.com/problems/3sum/
*/
