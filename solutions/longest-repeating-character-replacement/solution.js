/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const counter = {};
  let l = 0;
  let maxFreq = 0;

  for (let r = 0; r < s.length; r++) {
    counter[s[r]] = counter[s[r]] + 1 || 1;
    maxFreq = Math.max(maxFreq, counter[s[r]]);

    if (r - l + 1 - maxFreq > k) {
      counter[s[l]]--;
      l++;
    }
  }

  return s.length - l;
};

module.exports = { characterReplacement };

/*
https://leetcode.com/problems/longest-repeating-character-replacement/
*/
