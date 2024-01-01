/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, l = 0, r = s.length - 1, skipped = false) {
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else
      return skipped
        ? false
        : validPalindrome(s, l + 1, r, true) ||
            validPalindrome(s, l, r - 1, true);
  }
  return true;
};

module.exports = { validPalindrome };

/*
https://leetcode.com/problems/valid-palindrome-ii/
*/
