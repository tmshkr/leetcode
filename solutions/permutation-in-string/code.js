/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let matches = 0;
  const cntr = s1.split("").reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});
  const uniqueChars = Object.keys(cntr).length;

  for (let i = 0; i < s2.length; i++) {
    const l = s2[i - s1.length];
    const r = s2[i];

    if (l in cntr) {
      if (cntr[l] === 0) matches--;
      cntr[l]++;
      if (cntr[l] === 0) matches++;
    }

    if (r in cntr) {
      if (cntr[r] === 0) matches--;
      cntr[r]--;
      if (cntr[r] === 0) matches++;
    }

    if (matches === uniqueChars) {
      return true;
    }
  }

  return false;
};

module.exports = { checkInclusion };

/*
https://leetcode.com/problems/permutation-in-string/
*/
