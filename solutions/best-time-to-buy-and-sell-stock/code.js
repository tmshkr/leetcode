/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }
  return maxProfit;
};

module.exports = { maxProfit };

/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/
