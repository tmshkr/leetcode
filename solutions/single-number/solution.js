/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (num of nums) {
    res ^= num;
  }
  return res;
};

module.exports = { singleNumber };

/*
https://leetcode.com/problems/single-number/
*/
