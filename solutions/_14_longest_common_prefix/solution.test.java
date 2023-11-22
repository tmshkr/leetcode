package _14_longest_common_prefix;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("{ \"flower\", \"flow\", \"flight\" }")
  void addsTwoNumbers() {
    Solution s = new Solution();
    String[] strs = { "flower", "flow", "flight" };
    assertEquals("fl", s.longestCommonPrefix(strs));
  }

  @Test
  @DisplayName("{ \"dog\", \"racecar\", \"car\" }")
  void addsTwoNumbers2() {
    Solution s = new Solution();
    String[] strs = { "dog", "racecar", "car" };
    assertEquals("", s.longestCommonPrefix(strs));
  }
}
