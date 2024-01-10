package _1498_number_of_subsequences_that_satisfy_the_given_sum_condition;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,5,6,7],9")
  void numSubseq0() {
    Solution s = new Solution();
    int[] nums = { 3, 5, 6, 7 };
    int target = 9;
    int expected = 4;
    int actual = s.numSubseq(nums, target);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,3,6,8],10")
  void numSubseq1() {
    Solution s = new Solution();
    int[] nums = { 3, 3, 6, 8 };
    int target = 10;
    int expected = 6;
    int actual = s.numSubseq(nums, target);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,3,3,4,6,7],12")
  void numSubseq2() {
    Solution s = new Solution();
    int[] nums = { 2, 3, 3, 4, 6, 7 };
    int target = 12;
    int expected = 61;
    int actual = s.numSubseq(nums, target);
    assertEquals(expected, actual);
  }
}
