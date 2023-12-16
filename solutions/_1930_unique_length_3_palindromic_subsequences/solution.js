/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let count = 0;

  for (const char of new Set(s)) {
    const first = s.indexOf(char);
    const last = s.lastIndexOf(char);
    count += new Set(s.slice(first + 1, last)).size;
  }
  return count;
};

module.exports = { countPalindromicSubsequence };

/*
https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
*/
