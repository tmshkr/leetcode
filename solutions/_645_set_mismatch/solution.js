/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const set = new Set();
  let sum = (n * (n + 1)) / 2;
  let duplicate;

  for (const num of nums) {
    if (set.has(num)) {
      duplicate = num;
    } else {
      set.add(num);
    }
    sum -= num;
  }

  const missing = sum + duplicate;
  return [duplicate, missing];
};

module.exports = { findErrorNums };

/*
https://leetcode.com/problems/set-mismatch/
*/
