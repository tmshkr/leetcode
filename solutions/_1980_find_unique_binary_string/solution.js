/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  for (let i = 0; i < 1 << n; i++) {
    const str = i.toString(2).padStart(n, "0");
    if (!set.has(str)) {
      return str;
    }
  }
  return "";
};

module.exports = { findDifferentBinaryString };

/*
https://leetcode.com/problems/find-unique-binary-string/
*/
