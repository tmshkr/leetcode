/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let maj = null;
  for (const n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};

module.exports = { majorityElement };

/*
https://leetcode.com/problems/majority-element/
*/
