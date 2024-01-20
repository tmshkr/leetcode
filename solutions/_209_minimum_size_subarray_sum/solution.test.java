
package _209_minimum_size_subarray_sum;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("7,[2,3,1,2,4,3]")
  void minSubArrayLen0() {
    Solution s = new Solution();
    int[] nums = { 2, 3, 1, 2, 4, 3 };
    int target = 7;
    int expected = 2;
    int actual = s.minSubArrayLen(target, nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("4,[1,4,4]")
  void minSubArrayLen1() {
    Solution s = new Solution();
    int[] nums = { 1, 4, 4 };
    int target = 4;
    int expected = 1;
    int actual = s.minSubArrayLen(target, nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("11,[1,1,1,1,1,1,1,1]")
  void minSubArrayLen2() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1, 1, 1, 1, 1, 1 };
    int target = 11;
    int expected = 0;
    int actual = s.minSubArrayLen(target, nums);
    assertEquals(expected, actual);
  }

}