package _217_contains_duplicate;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,1]")
  void containsDuplicate0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 1 };
    boolean expected = true;
    assertEquals(expected, s.containsDuplicate(nums));
  }

  @Test
  @DisplayName("[1,2,3,4]")
  void containsDuplicate1() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 4 };
    boolean expected = false;
    assertEquals(expected, s.containsDuplicate(nums));
  }

  @Test
  @DisplayName("[1,1,1,3,3,4,3,2,4,2]")
  void containsDuplicate2() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 };
    boolean expected = true;
    assertEquals(expected, s.containsDuplicate(nums));
  }
}
