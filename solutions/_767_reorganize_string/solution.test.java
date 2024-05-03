
package _767_reorganize_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'aab'")
  void reorganizeString0() {
    Solution s = new Solution();
    assertEquals("aba", s.reorganizeString("aab"));
  }

  @Test
  @DisplayName("'aaab'")
  void reorganizeString1() {
    Solution s = new Solution();
    assertEquals("", s.reorganizeString("aaab"));
  }

}