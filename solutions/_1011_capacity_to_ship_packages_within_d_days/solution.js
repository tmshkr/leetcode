/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let L = 0;
  let R = 0;
  for (const w of weights) {
    L = Math.max(L, w);
    R += w;
  }

  const isPossible = (mid) => {
    let daysNeeded = 1;
    let shipmentWeight = 0;
    for (const w of weights) {
      if (shipmentWeight + w > mid) {
        daysNeeded++;
        shipmentWeight = 0;
      }
      shipmentWeight += w;
    }
    return daysNeeded <= days;
  };

  while (L < R) {
    const mid = L + Math.floor((R - L) / 2);
    if (isPossible(mid)) {
      R = mid;
    } else {
      L = mid + 1;
    }
  }

  return L;
};

module.exports = { shipWithinDays };

/*
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
*/
