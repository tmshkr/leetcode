/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let L = 0;
  let R = removable.length;

  while (L < R) {
    const mid = Math.floor((L + R) / 2);
    if (isSubsequence(s, p, removable, mid + 1)) {
      L = mid + 1;
    } else {
      R = mid;
    }
  }
  return L;
};

function isSubsequence(s, p, removable, k) {
  const removed = s.split("");
  for (let i = 0; i < k; i++) {
    removed[removable[i]] = "";
  }
  let j = 0;
  for (let i = 0; i < s.length && j < p.length; i++) {
    if (removed[i] == p[j]) {
      j++;
    }
  }
  return j == p.length;
}

module.exports = { maximumRemovals };

/*
https://leetcode.com/problems/maximum-number-of-removable-characters/
*/
