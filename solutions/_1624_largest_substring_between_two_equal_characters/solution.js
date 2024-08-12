/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const charToIndex = new Map();
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    if (charToIndex.has(s[i])) {
      max = Math.max(max, i - charToIndex.get(s[i]) - 1);
    } else {
      charToIndex.set(s[i], i);
    }
  }
  return max;
};

module.exports = { maxLengthBetweenEqualCharacters };

/*
https://leetcode.com/problems/largest-substring-between-two-equal-characters/
*/
