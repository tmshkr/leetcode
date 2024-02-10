
package _540_single_element_in_a_sorted_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,2,3,3,4,4,8,8]")
  void singleNonDuplicate0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 2, 3, 3, 4, 4, 8, 8 };
    int expected = 2;
    int actual = s.singleNonDuplicate(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,3,7,7,10,11,11]")
  void singleNonDuplicate1() {
    Solution s = new Solution();
    int[] nums = { 3, 3, 7, 7, 10, 11, 11 };
    int expected = 10;
    int actual = s.singleNonDuplicate(nums);
    assertEquals(expected, actual);
  }

}