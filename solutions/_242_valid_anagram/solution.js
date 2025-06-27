/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const ctr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    ++ctr[s.charCodeAt(i) - "a".charCodeAt(0)];
    --ctr[t.charCodeAt(i) - "a".charCodeAt(0)];
  }

  return ctr.every((count) => count === 0);
};

module.exports = { isAnagram };

/*
https://leetcode.com/problems/valid-anagram/
*/
