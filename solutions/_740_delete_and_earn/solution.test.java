
package _740_delete_and_earn;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,4,2]")
  void deleteAndEarn0() {
    Solution s = new Solution();
    int[] nums = { 3, 4, 2 };
    int expected = 6;
    int actual = s.deleteAndEarn(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,2,3,3,3,4]")
  void deleteAndEarn1() {
    Solution s = new Solution();
    int[] nums = { 2, 2, 3, 3, 3, 4 };
    int expected = 9;
    int actual = s.deleteAndEarn(nums);
    assertEquals(expected, actual);
  }

}