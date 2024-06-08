
package _1856_maximum_subarray_min_product;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,2]")
  void maxSumMinProduct0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 2 };
    int expected = 14;
    int actual = s.maxSumMinProduct(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,3,3,1,2]")
  void maxSumMinProduct1() {
    Solution s = new Solution();
    int[] nums = { 2, 3, 3, 1, 2 };
    int expected = 18;
    int actual = s.maxSumMinProduct(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,1,5,6,4,2]")
  void maxSumMinProduct2() {
    Solution s = new Solution();
    int[] nums = { 3, 1, 5, 6, 4, 2 };
    int expected = 60;
    int actual = s.maxSumMinProduct(nums);
    assertEquals(expected, actual);
  }
}