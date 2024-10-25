/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const set = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.slice(i, i + k));
  }
  return set.size === 2 ** k;
};

module.exports = { hasAllCodes };

/*
https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
*/
