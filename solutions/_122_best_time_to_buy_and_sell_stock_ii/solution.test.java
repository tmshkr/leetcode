package _122_best_time_to_buy_and_sell_stock_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[7,1,5,3,6,4]")
  void maxProfit0() {
    Solution s = new Solution();
    int[] prices = { 7, 1, 5, 3, 6, 4 };
    int expected = 7;
    int actual = s.maxProfit(prices);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3,4,5]")
  void maxProfit1() {
    Solution s = new Solution();
    int[] prices = { 1, 2, 3, 4, 5 };
    int expected = 4;
    int actual = s.maxProfit(prices);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[7,6,4,3,1]")
  void maxProfit2() {
    Solution s = new Solution();
    int[] prices = { 7, 6, 4, 3, 1 };
    int expected = 0;
    int actual = s.maxProfit(prices);
    assertEquals(expected, actual);
  }
}
