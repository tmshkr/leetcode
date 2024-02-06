/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let lo = 1;
  let hi = n;
  let res = 0;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const coins = (mid / 2) * (mid + 1);
    if (coins > n) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
      res = Math.max(mid, res);
    }
  }

  return res;
};

module.exports = { arrangeCoins };

/*
https://leetcode.com/problems/arranging-coins/
*/
