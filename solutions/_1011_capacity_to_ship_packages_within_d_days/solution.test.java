
package _1011_capacity_to_ship_packages_within_d_days;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4,5,6,7,8,9,10],5")
  void shipWithinDays0() {
    Solution s = new Solution();
    int[] weights = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    int days = 5;
    int expected = 15;
    assertEquals(expected, s.shipWithinDays(weights, days));
  }

  @Test
  @DisplayName("[3,2,2,4,1,4],3")
  void shipWithinDays1() {
    Solution s = new Solution();
    int[] weights = { 3, 2, 2, 4, 1, 4 };
    int days = 3;
    int expected = 6;
    assertEquals(expected, s.shipWithinDays(weights, days));
  }

  @Test
  @DisplayName("[1,2,3,1,1],4")
  void shipWithinDays2() {
    Solution s = new Solution();
    int[] weights = { 1, 2, 3, 1, 1 };
    int days = 4;
    int expected = 3;
    assertEquals(expected, s.shipWithinDays(weights, days));
  }

}