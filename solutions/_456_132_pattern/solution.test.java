
package _456_132_pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4]")
  void find132pattern0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 4 };
    boolean expected = false;
    boolean actual = s.find132pattern(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,1,4,2]")
  void find132pattern1() {
    Solution s = new Solution();
    int[] nums = { 3, 1, 4, 2 };
    boolean expected = true;
    boolean actual = s.find132pattern(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[-1,3,2,0]")
  void find132pattern2() {
    Solution s = new Solution();
    int[] nums = { -1, 3, 2, 0 };
    boolean expected = true;
    boolean actual = s.find132pattern(nums);
    assertEquals(expected, actual);
  }

}