package _27_remove_element;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,2,2,3],3")
  void removeElement0() {
    Solution s = new Solution();
    int[] nums = { 3, 2, 2, 3 };
    int val = 3;
    int expected = 2;
    int actual = s.removeElement(nums, val);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[0,1,2,2,3,0,4,2],2")
  void removeElement1() {
    Solution s = new Solution();
    int[] nums = { 0, 1, 2, 2, 3, 0, 4, 2 };
    int val = 2;
    int expected = 5;
    int actual = s.removeElement(nums, val);
    assertEquals(expected, actual);
  }
}
