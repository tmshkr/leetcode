/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = Array(26).fill(0);

  for (let i = 0; i < s.length; ++i) {
    ++count[s.charCodeAt(i) - 97];
    --count[t.charCodeAt(i) - 97];
  }

  for (let i = 0; i < 26; ++i) {
    if (count[i] !== 0) return false;
  }

  return true;
};

module.exports = { isAnagram };

/*
https://leetcode.com/problems/valid-anagram/
*/
