package _189_rotate_array;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4,5,6,7],3")
  void rotate0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
    int k = 3;
    int[] expected = { 5, 6, 7, 1, 2, 3, 4 };
    s.rotate(nums, k);
    assertArrayEquals(expected, nums);
  }

  @Test
  @DisplayName("[-1,-100,3,99],2")
  void rotate1() {
    Solution s = new Solution();
    int[] nums = { -1, -100, 3, 99 };
    int k = 2;
    int[] expected = { 3, 99, -1, -100 };
    s.rotate(nums, k);
    assertArrayEquals(expected, nums);
  }
}
