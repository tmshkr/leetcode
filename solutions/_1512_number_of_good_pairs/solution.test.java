
package _1512_number_of_good_pairs;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,1,1,3]")
  void numIdenticalPairs0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 1, 1, 3 };
    int expected = 4;
    int result = s.numIdenticalPairs(nums);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[1,1,1,1]")
  void numIdenticalPairs1() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1, 1 };
    int expected = 6;
    int result = s.numIdenticalPairs(nums);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[1,2,3]")
  void numIdenticalPairs2() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3 };
    int expected = 0;
    int result = s.numIdenticalPairs(nums);
    assertEquals(expected, result);
  }
}