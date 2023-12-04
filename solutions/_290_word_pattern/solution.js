/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const map = {};
  const set = new Set();
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    if (map[p] === undefined) {
      if (set.has(w)) {
        return false;
      }
      map[p] = w;
      set.add(w);
    } else if (map[p] !== w) {
      return false;
    }
  }

  return true;
};

module.exports = { wordPattern };

/*
https://leetcode.com/problems/word-pattern/
*/
