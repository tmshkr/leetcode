
package _441_arranging_coins;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("5")
  void arrangeCoins0() {
    Solution s = new Solution();
    assertEquals(2, s.arrangeCoins(5));
  }

  @Test
  @DisplayName("8")
  void arrangeCoins1() {
    Solution s = new Solution();
    assertEquals(3, s.arrangeCoins(8));
  }

}