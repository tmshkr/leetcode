/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const good = new Set();

  for (const t of triplets) {
    if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
      continue;
    }
    for (let i = 0; i < 3; i++) {
      if (t[i] === target[i]) {
        good.add(i);
      }
    }
  }

  return good.size === 3;
};

module.exports = { mergeTriplets };
