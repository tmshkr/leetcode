/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const counter = {};
  let l = 0;
  let r = 0;
  let maxFreq = 0;

  while (true) {
    counter[s[r]] = counter[s[r]] + 1 || 1;
    maxFreq = Math.max(maxFreq, counter[s[r]]);

    if (r - l + 1 - maxFreq > k) {
      counter[s[l]]--;
      l++;
    }

    if (r < s.length - 1) {
      r++;
    } else return r - l + 1;
  }
};

module.exports = { characterReplacement };

/*
https://leetcode.com/problems/longest-repeating-character-replacement/
*/
