/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let w = s1.length;
  let matches = 0;
  const cntr = s1.split("").reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] in cntr) {
      if (cntr[s2[i]] === 0) matches--;
      cntr[s2[i]]--;
      if (cntr[s2[i]] === 0) matches++;
    }

    if (i >= w && s2[i - w] in cntr) {
      if (cntr[s2[i - w]] === 0) matches--;
      cntr[s2[i - w]]++;
      if (cntr[s2[i - w]] === 0) matches++;
    }

    if (matches === Object.keys(cntr).length) {
      return true;
    }
  }

  return false;
};

module.exports = { checkInclusion };

/*
https://leetcode.com/problems/permutation-in-string/
*/
