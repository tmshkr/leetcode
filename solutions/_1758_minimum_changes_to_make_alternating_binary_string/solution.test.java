
package _1758_minimum_changes_to_make_alternating_binary_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'0100'")
  void minOperations0() {
    Solution s = new Solution();
    assertEquals(1, s.minOperations("0100"));
  }

  @Test
  @DisplayName("'10'")
  void minOperations1() {
    Solution s = new Solution();
    assertEquals(0, s.minOperations("10"));
  }

  @Test
  @DisplayName("'1111'")
  void minOperations2() {
    Solution s = new Solution();
    assertEquals(2, s.minOperations("1111"));
  }
}