
package _34_find_first_and_last_position_of_element_in_sorted_array;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[5,7,7,8,8,10],8")
  void searchRange0() {
    Solution s = new Solution();
    int[] nums = { 5, 7, 7, 8, 8, 10 };
    int target = 8;
    int[] expected = { 3, 4 };
    int[] actual = s.searchRange(nums, target);
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[5,7,7,8,8,10],6")
  void searchRange1() {
    Solution s = new Solution();
    int[] nums = { 5, 7, 7, 8, 8, 10 };
    int target = 6;
    int[] expected = { -1, -1 };
    int[] actual = s.searchRange(nums, target);
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[],0")
  void searchRange2() {
    Solution s = new Solution();
    int[] nums = {};
    int target = 0;
    int[] expected = { -1, -1 };
    int[] actual = s.searchRange(nums, target);
    assertArrayEquals(expected, actual);
  }

}