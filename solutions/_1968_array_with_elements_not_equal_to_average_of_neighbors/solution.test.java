package _1968_array_with_elements_not_equal_to_average_of_neighbors;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  boolean check(int[] nums) {
    for (int i = 1; i < nums.length - 1; i++) {
      if ((nums[i - 1] + nums[i + 1]) / 2 == nums[i]) {
        return false;
      }
    }
    return true;
  }

  @Test
  @DisplayName("[1,2,3,4,5]")
  void rearrangeArray0() {
    Solution s = new Solution();
    int[] input = { 1, 2, 3, 4, 5 };
    int[] actual = s.rearrangeArray(input);
    assertEquals(check(actual), true);
  }

  @Test
  @DisplayName("[6,2,0,9,7]")
  void rearrangeArray1() {
    Solution s = new Solution();
    int[] input = { 6, 2, 0, 9, 7 };
    int[] actual = s.rearrangeArray(input);
    assertEquals(check(actual), true);
  }
}
