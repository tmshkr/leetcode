package _1913_maximum_product_difference_between_two_pairs;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[5,6,2,7,4]")
  void maxProductDifference0() {
    Solution s = new Solution();
    int[] nums = { 5, 6, 2, 7, 4 };
    int expected = 34;
    int actual = s.maxProductDifference(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[4,2,5,9,7,4,8]")
  void maxProductDifference1() {
    Solution s = new Solution();
    int[] nums = { 4, 2, 5, 9, 7, 4, 8 };
    int expected = 64;
    int actual = s.maxProductDifference(nums);
    assertEquals(expected, actual);
  }
}