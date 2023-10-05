/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += countPalindromes(s, i, i);
    count += countPalindromes(s, i, i + 1);
  }

  return count;
};

const countPalindromes = (s, left, right) => {
  let count = 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }

  return count;
};

module.exports = { countSubstrings };

/*
https://leetcode.com/problems/palindromic-substrings/
*/
