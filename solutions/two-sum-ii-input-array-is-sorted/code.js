/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }
    if (sum < target) {
      l++;
    }
    if (sum > target) {
      r--;
    }
  }
};

module.exports = { twoSum };

/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
*/
