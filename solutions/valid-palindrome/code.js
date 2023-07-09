/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && /[\W_]/.test(s[left])) {
      left++;
    }
    while (right > left && /[\W_]/.test(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

module.exports = { isPalindrome };

/*
https://leetcode.com/problems/valid-palindrome/
*/
