package _2348_number_of_zero_filled_subarrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,3,0,0,2,0,0,4]")
  void zeroFilledSubarray0() {
    Solution s = new Solution();
    int[] nums = { 1, 3, 0, 0, 2, 0, 0, 4 };
    long actual = s.zeroFilledSubarray(nums);
    long expected = 6;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[0,0,0,2,0,0]")
  void zeroFilledSubarray1() {
    Solution s = new Solution();
    int[] nums = { 0, 0, 0, 2, 0, 0 };
    long actual = s.zeroFilledSubarray(nums);
    long expected = 9;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,10,2019]")
  void zeroFilledSubarray2() {
    Solution s = new Solution();
    int[] nums = { 2, 10, 2019 };
    long actual = s.zeroFilledSubarray(nums);
    long expected = 0;
    assertEquals(expected, actual);
  }
}
