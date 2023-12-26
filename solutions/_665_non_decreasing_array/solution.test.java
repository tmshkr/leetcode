package _665_non_decreasing_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[4,2,3]")
  void checkPossibility0() {
    Solution s = new Solution();
    int[] nums = { 4, 2, 3 };
    boolean expected = true;
    boolean actual = s.checkPossibility(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[4,2,1]")
  void checkPossibility1() {
    Solution s = new Solution();
    int[] nums = { 4, 2, 1 };
    boolean expected = false;
    boolean actual = s.checkPossibility(nums);
    assertEquals(expected, actual);
  }
}
