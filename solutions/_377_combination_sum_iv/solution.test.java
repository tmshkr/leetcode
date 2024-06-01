
package _377_combination_sum_iv;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3],4")
  void combinationSum40() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3 };
    int target = 4;
    int expected = 7;
    int result = s.combinationSum4(nums, target);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[9],3")
  void combinationSum41() {
    Solution s = new Solution();
    int[] nums = { 9 };
    int target = 3;
    int expected = 0;
    int result = s.combinationSum4(nums, target);
    assertEquals(expected, result);
  }
}