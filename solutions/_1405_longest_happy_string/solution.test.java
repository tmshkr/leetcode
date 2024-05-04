
package _1405_longest_happy_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("1,1,7")
  void longestDiverseString0() {
    Solution s = new Solution();
    assertEquals("ccaccbcc", s.longestDiverseString(1, 1, 7));
  }

  @Test
  @DisplayName("7,1,0")
  void longestDiverseString1() {
    Solution s = new Solution();
    assertEquals("aabaa", s.longestDiverseString(7, 1, 0));
  }
}