
package _977_squares_of_a_sorted_array;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[-4,-1,0,3,10]")
  void sortedSquares0() {
    Solution s = new Solution();
    int[] nums = { -4, -1, 0, 3, 10 };
    int[] expected = { 0, 1, 9, 16, 100 };
    int[] result = s.sortedSquares(nums);
    assertArrayEquals(expected, result);
  }

  @Test
  @DisplayName("[-7,-3,2,3,11]")
  void sortedSquares1() {
    Solution s = new Solution();
    int[] nums = { -7, -3, 2, 3, 11 };
    int[] expected = { 4, 9, 9, 49, 121 };
    int[] result = s.sortedSquares(nums);
    assertArrayEquals(expected, result);
  }

}