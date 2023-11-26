/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const s2t = {};
  const t2s = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (
      (sChar in s2t && s2t[sChar] !== tChar) ||
      (tChar in t2s && t2s[tChar] !== sChar)
    ) {
      return false;
    }

    s2t[sChar] = tChar;
    t2s[tChar] = sChar;
  }
  return true;
};

module.exports = { isIsomorphic };

/*
https://leetcode.com/problems/isomorphic-strings/
*/
