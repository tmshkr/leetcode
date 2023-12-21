/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`;
  });

  if (sorted[0] === 0) {
    return "0";
  }

  return sorted.join("");
};

module.exports = { largestNumber };

/*
https://leetcode.com/problems/largest-number/
*/
