/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  const res = new Array(n);
  let L = 0;
  let R = n - 1;

  while (L <= R) {
    const left = nums[L];
    const right = nums[R];
    const idx = R - L;

    if (Math.abs(left) > Math.abs(right)) {
      res[idx] = left ** 2;
      L++;
    } else {
      res[idx] = right ** 2;
      R--;
    }
  }

  return res;
};

module.exports = { sortedSquares };

/*
https://leetcode.com/problems/squares-of-a-sorted-array/
*/
