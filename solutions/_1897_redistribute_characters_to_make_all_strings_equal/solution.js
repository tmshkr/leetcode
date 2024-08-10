/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const ctr = new Map();
  for (const word of words) {
    for (const char of word) {
      ctr.set(char, (ctr.get(char) || 0) + 1);
    }
  }

  for (const [_, val] of ctr) {
    if (val % words.length !== 0) {
      return false;
    }
  }
  return true;
};

module.exports = { makeEqual };

/*
https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
*/
