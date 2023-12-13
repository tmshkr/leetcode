package _122_best_time_to_buy_and_sell_stock_ii;

class Solution {

  public int maxProfit(int[] prices) {
    int profit = 0;
    for (int i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }
}
/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/
