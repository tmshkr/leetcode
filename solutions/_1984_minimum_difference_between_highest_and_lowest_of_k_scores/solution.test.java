package _1984_minimum_difference_between_highest_and_lowest_of_k_scores;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[90],1")
  void minimumDifference0() {
    Solution s = new Solution();
    int[] nums = { 90 };
    int k = 1;
    int expected = 0;
    int actual = s.minimumDifference(nums, k);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[9,4,1,7],2")
  void minimumDifference1() {
    Solution s = new Solution();
    int[] nums = { 9, 4, 1, 7 };
    int k = 2;
    int expected = 2;
    int actual = s.minimumDifference(nums, k);
    assertEquals(expected, actual);
  }
}
