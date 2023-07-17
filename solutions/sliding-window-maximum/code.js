/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const output = [];
  const q = [];
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    while (q.length && nums[q[q.length - 1]] < nums[r]) {
      q.pop();
    }
    q.push(r);

    if (l > q[0]) {
      q.shift();
    }
    if (r + 1 >= k) {
      output.push(nums[q[0]]);
      l++;
    }
    r++;
  }
  return output;
};

module.exports = { maxSlidingWindow };

/*
https://leetcode.com/problems/sliding-window-maximum/
*/
