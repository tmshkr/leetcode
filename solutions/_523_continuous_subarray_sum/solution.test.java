package _523_continuous_subarray_sum;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[23,2,4,6,7],6")
  void checkSubarraySum0() {
    Solution s = new Solution();
    int[] nums = { 23, 2, 4, 6, 7 };
    int k = 6;
    boolean actual = s.checkSubarraySum(nums, k);
    boolean expected = true;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[23,2,6,4,7],6")
  void checkSubarraySum1() {
    Solution s = new Solution();
    int[] nums = { 23, 2, 6, 4, 7 };
    int k = 6;
    boolean actual = s.checkSubarraySum(nums, k);
    boolean expected = true;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[23,2,6,4,7],13")
  void checkSubarraySum2() {
    Solution s = new Solution();
    int[] nums = { 23, 2, 6, 4, 7 };
    int k = 13;
    boolean actual = s.checkSubarraySum(nums, k);
    boolean expected = false;
    assertEquals(expected, actual);
  }
}
