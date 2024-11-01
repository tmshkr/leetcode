package _1_two_sum;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,7,11,15],9")
  void twoSum0() {
    Solution s = new Solution();
    int[] nums = { 2, 7, 11, 15 };
    int target = 9;
    int[] expected = { 0, 1 };
    int[] result = s.twoSum(nums, target);
    assertEquals(expected[0], result[0]);
    assertEquals(expected[1], result[1]);
  }

  @Test
  @DisplayName("[3,2,4],6")
  void twoSum1() {
    Solution s = new Solution();
    int[] nums = { 3, 2, 4 };
    int target = 6;
    int[] expected = { 1, 2 };
    int[] result = s.twoSum(nums, target);
    assertEquals(expected[0], result[0]);
    assertEquals(expected[1], result[1]);
  }

  @Test
  @DisplayName("[3,3],6")
  void twoSum2() {
    Solution s = new Solution();
    int[] nums = { 3, 3 };
    int target = 6;
    int[] expected = { 0, 1 };
    int[] result = s.twoSum(nums, target);
    assertEquals(expected[0], result[0]);
    assertEquals(expected[1], result[1]);
  }
}
