/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const s = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!s.has(num - 1)) {
      let curr = 1;
      while (s.has(num + curr)) curr++;
      longest = Math.max(longest, curr);
    }
  }

  return longest;
};

module.exports = { longestConsecutive };

/*
https://leetcode.com/problems/longest-consecutive-sequence/
*/
