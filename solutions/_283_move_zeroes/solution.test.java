package _283_move_zeroes;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[0,1,0,3,12]")
  void moveZeroes0() {
    Solution s = new Solution();
    int[] nums = { 0, 1, 0, 3, 12 };
    int[] expected = { 1, 3, 12, 0, 0 };
    s.moveZeroes(nums);
    assertArrayEquals(nums, expected);
  }

  @Test
  @DisplayName("[0]")
  void moveZeroes1() {
    Solution s = new Solution();
    int[] nums = { 0 };
    int[] expected = { 0 };
    s.moveZeroes(nums);
    assertArrayEquals(nums, expected);
  }
}
