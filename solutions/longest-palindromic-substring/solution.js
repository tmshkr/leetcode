/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const longest = { start: 0, length: 0 };

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;
      if (length > longest.length) {
        longest.start = left;
        longest.length = length;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return s.slice(longest.start, longest.start + longest.length);
};

module.exports = { longestPalindrome };

/*
https://leetcode.com/problems/longest-palindromic-substring/
*/
