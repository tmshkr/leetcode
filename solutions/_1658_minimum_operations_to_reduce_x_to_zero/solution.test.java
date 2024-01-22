
package _1658_minimum_operations_to_reduce_x_to_zero;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,4,2,3],5")
  void minOperations0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 4, 2, 3 };
    int x = 5;
    int expected = 2;
    int actual = s.minOperations(nums, x);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[5,6,7,8,9],4")
  void minOperations1() {
    Solution s = new Solution();
    int[] nums = { 5, 6, 7, 8, 9 };
    int x = 4;
    int expected = -1;
    int actual = s.minOperations(nums, x);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,2,20,1,1,3],10")
  void minOperations2() {
    Solution s = new Solution();
    int[] nums = { 3, 2, 20, 1, 1, 3 };
    int x = 10;
    int expected = 5;
    int actual = s.minOperations(nums, x);
    assertEquals(expected, actual);
  }

}