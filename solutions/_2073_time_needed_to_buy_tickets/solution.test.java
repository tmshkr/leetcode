
package _2073_time_needed_to_buy_tickets;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,3,2],2")
  void timeRequiredToBuy0() {
    Solution s = new Solution();
    assertEquals(6, s.timeRequiredToBuy(new int[] { 2, 3, 2 }, 2));
  }

  @Test
  @DisplayName("[5,1,1,1],0")
  void timeRequiredToBuy1() {
    Solution s = new Solution();
    assertEquals(8, s.timeRequiredToBuy(new int[] { 5, 1, 1, 1 }, 0));
  }
}