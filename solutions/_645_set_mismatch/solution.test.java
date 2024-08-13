
package _645_set_mismatch;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,2,4]")
  void findErrorNums0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 2, 4 };
    int[] expected = { 2, 3 };
    int[] result = s.findErrorNums(nums);
    assertArrayEquals(expected, result);
  }

  @Test
  @DisplayName("[1,1]")
  void findErrorNums1() {
    Solution s = new Solution();
    int[] nums = { 1, 1 };
    int[] expected = { 1, 2 };
    int[] result = s.findErrorNums(nums);
    assertArrayEquals(expected, result);
  }

}