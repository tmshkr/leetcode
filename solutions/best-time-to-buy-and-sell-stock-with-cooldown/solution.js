/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = -prices[0];
  let sell = 0;
  let cooldown = 0;

  for (let i = 1; i < prices.length; i++) {
    [buy, sell, cooldown] = [
      Math.max(buy, cooldown - prices[i]),
      Math.max(sell, buy + prices[i]),
      Math.max(cooldown, sell),
    ];
  }
  return Math.max(sell, cooldown);
};

module.exports = { maxProfit };

/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
*/
