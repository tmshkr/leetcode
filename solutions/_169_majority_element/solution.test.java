package _169_majority_element;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,2,3]")
  void majorityElement0() {
    Solution s = new Solution();
    int[] nums = { 3, 2, 3 };
    int expected = 3;
    int actual = s.majorityElement(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,2,1,1,1,2,2]")
  void majorityElement1() {
    Solution s = new Solution();
    int[] nums = { 2, 2, 1, 1, 1, 2, 2 };
    int expected = 2;
    int actual = s.majorityElement(nums);
    assertEquals(expected, actual);
  }
}
