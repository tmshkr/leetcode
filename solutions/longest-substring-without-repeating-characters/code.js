/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  let l = 0;
  let longest = 0;

  for (let r = 0; r < s.length; r++) {
    while (chars.has(s[r])) {
      chars.delete(s[l]);
      l++;
    }
    chars.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }

  return longest;
};

module.exports = { lengthOfLongestSubstring };

/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/
