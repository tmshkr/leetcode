/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let start = 0;
  const pMap = {};
  const sMap = {};
  const result = [];

  for (const char of p) {
    pMap[char] = pMap[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sMap[char] = sMap[char] + 1 || 1;

    if (i - start + 1 === p.length) {
      if (compareMaps(pMap, sMap)) {
        result.push(start);
      }

      const charToRemove = s[start];
      sMap[charToRemove]--;
      if (sMap[charToRemove] === 0) {
        delete sMap[charToRemove];
      }

      start++;
    }
  }

  return result;
};

function compareMaps(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

module.exports = { findAnagrams };

/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/
*/
