package _912_sort_an_array;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[5,2,3,1]")
  void sortArray0() {
    Solution s = new Solution();
    int[] nums = { 5, 2, 3, 1 };
    int[] expected = { 1, 2, 3, 5 };
    int[] actual = s.sortArray(nums);
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[5,1,1,2,0,0]")
  void sortArray1() {
    Solution s = new Solution();
    int[] nums = { 5, 1, 1, 2, 0, 0 };
    int[] expected = { 0, 0, 1, 1, 2, 5 };
    int[] actual = s.sortArray(nums);
    assertArrayEquals(expected, actual);
  }
}
