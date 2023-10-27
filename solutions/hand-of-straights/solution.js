/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const map = new Map();
  for (const card of hand) {
    map.set(card, (map.get(card) || 0) + 1);
  }

  const keys = [...map.keys()].sort((a, b) => a - b);

  for (const key of keys) {
    const freq = map.get(key);
    if (freq > 0) {
      for (let i = 0; i < groupSize; i++) {
        if ((map.get(key + i) || 0) < freq) {
          return false;
        }
        map.set(key + i, map.get(key + i) - freq);
      }
    }
  }

  return true;
};

module.exports = { isNStraightHand };

/*
https://leetcode.com/problems/hand-of-straights/
*/
