/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const chars = new Map();
  for (const char of s) {
    chars.set(char, (chars.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (chars.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

module.exports = { firstUniqChar };

/*
https://leetcode.com/problems/first-unique-character-in-a-string/
*/
