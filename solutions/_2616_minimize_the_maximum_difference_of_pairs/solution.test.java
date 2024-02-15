
package _2616_minimize_the_maximum_difference_of_pairs;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[10,1,2,7,1,3],2")
  void minimizeMax0() {
    Solution s = new Solution();
    int[] nums = { 10, 1, 2, 7, 1, 3 };
    int p = 2;
    int expected = 1;
    int actual = s.minimizeMax(nums, p);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[4,2,1,2],1")
  void minimizeMax1() {
    Solution s = new Solution();
    int[] nums = { 4, 2, 1, 2 };
    int p = 1;
    int expected = 0;
    int actual = s.minimizeMax(nums, p);
    assertEquals(expected, actual);
  }

}