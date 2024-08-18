package _1608_special_array_with_x_elements_greater_than_or_equal_x;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,5]")
  void specialArray0() {
    Solution s = new Solution();
    int[] nums = { 3, 5 };
    int expected = 2;
    int result = s.specialArray(nums);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[0,0]")
  void specialArray1() {
    Solution s = new Solution();
    int[] nums = { 0, 0 };
    int expected = -1;
    int result = s.specialArray(nums);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[0,4,3,0,4]")
  void specialArray2() {
    Solution s = new Solution();
    int[] nums = { 0, 4, 3, 0, 4 };
    int expected = 3;
    int result = s.specialArray(nums);
    assertEquals(expected, result);
  }
}