/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const count = new Array(101).fill(0);
  let result = 0;
  for (const num of nums) {
    result += count[num]++;
  }
  return result;
};

module.exports = { numIdenticalPairs };

/*
https://leetcode.com/problems/number-of-good-pairs/
*/
