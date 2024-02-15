/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let L = 0;
  let R = nums[n - 1] - nums[0];

  while (L < R) {
    const mid = L + Math.floor((R - L) / 2);
    let count = 0;

    for (let i = 1; i < n && count < p; i++) {
      if (nums[i] - nums[i - 1] <= mid) {
        count++;
        i++;
      }
    }

    if (count >= p) {
      R = mid;
    }
    else {
      L = mid + 1;
    }

  }

  return L;
};

module.exports = { minimizeMax };

/*
https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
*/
