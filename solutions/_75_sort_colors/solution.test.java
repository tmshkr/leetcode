package _75_sort_colors;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,0,2,1,1,0]")
  void sortColors0() {
    Solution s = new Solution();
    int[] nums = { 2, 0, 2, 1, 1, 0 };
    int[] expected = { 0, 0, 1, 1, 2, 2 };
    s.sortColors(nums);
    assertArrayEquals(expected, nums);
  }

  @Test
  @DisplayName("[2,0,1]")
  void sortColors1() {
    Solution s = new Solution();
    int[] nums = { 2, 0, 1 };
    int[] expected = { 0, 1, 2 };
    s.sortColors(nums);
    assertArrayEquals(expected, nums);
  }
}
