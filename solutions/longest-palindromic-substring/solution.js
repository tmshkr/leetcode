/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  let current = "";

  const expand = (left, right) => {
    let palindrome = "";
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      palindrome = s.substring(left, right + 1);
      left--;
      right++;
    }
    return palindrome;
  };

  for (let i = 0; i < s.length; i++) {
    current = expand(i, i);
    if (current.length > longest.length) {
      longest = current;
    }
    current = expand(i, i + 1);
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
};

module.exports = { longestPalindrome };

/*
https://leetcode.com/problems/longest-palindromic-substring/
*/
