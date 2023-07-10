/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const w = r - l;
    const h = Math.min(height[l], height[r]);
    max = Math.max(max, w * h);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

module.exports = { maxArea };

/*
https://leetcode.com/problems/container-with-most-water/
*/
