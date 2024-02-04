
package _35_search_insert_position;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,3,5,6],5")
  void searchInsert0() {
    Solution s = new Solution();
    int[] nums = { 1, 3, 5, 6 };
    int target = 5;
    int expected = 2;
    int actual = s.searchInsert(nums, target);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,3,5,6],2")
  void searchInsert1() {
    Solution s = new Solution();
    int[] nums = { 1, 3, 5, 6 };
    int target = 2;
    int expected = 1;
    int actual = s.searchInsert(nums, target);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,3,5,6],7")
  void searchInsert2() {
    Solution s = new Solution();
    int[] nums = { 1, 3, 5, 6 };
    int target = 7;
    int expected = 4;
    int actual = s.searchInsert(nums, target);
    assertEquals(expected, actual);
  }

}