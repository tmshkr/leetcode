package _724_find_pivot_index;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,7,3,6,5,6]")
  void pivotIndex0() {
    Solution s = new Solution();
    int[] nums = { 1, 7, 3, 6, 5, 6 };
    int expected = 3;
    int actual = s.pivotIndex(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3]")
  void pivotIndex1() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3 };
    int expected = -1;
    int actual = s.pivotIndex(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,1,-1]")
  void pivotIndex2() {
    Solution s = new Solution();
    int[] nums = { 2, 1, -1 };
    int expected = 0;
    int actual = s.pivotIndex(nums);
    assertEquals(expected, actual);
  }
}
