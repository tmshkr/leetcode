package _560_subarray_sum_equals_k;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,1],2")
  void subarraySum0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1 };
    int k = 2;
    int expected = 2;
    int actual = s.subarraySum(nums, k);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3],3")
  void subarraySum1() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3 };
    int k = 3;
    int expected = 2;
    int actual = s.subarraySum(nums, k);
    assertEquals(expected, actual);
  }
}
