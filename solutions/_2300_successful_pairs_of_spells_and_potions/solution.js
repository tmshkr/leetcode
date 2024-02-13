/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const n = potions.length;
  const m = spells.length;
  const pairs = Array(m);

  for (let i = 0; i < m; i++) {
    let L = 0;
    let R = n - 1;

    while (L <= R) {
      const mid = Math.floor((L + R) / 2);
      if (spells[i] * potions[mid] >= success) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    }

    if (L < n) {
      pairs[i] = n - L;
    } else {
      pairs[i] = 0;
    }
  }

  return pairs;
};

module.exports = { successfulPairs };

/*
https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
*/
