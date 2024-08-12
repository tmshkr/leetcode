
package _1624_largest_substring_between_two_equal_characters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'aa'")
  void maxLengthBetweenEqualCharacters0() {
    Solution s = new Solution();
    assertEquals(0, s.maxLengthBetweenEqualCharacters("aa"));
  }

  @Test
  @DisplayName("'abca'")
  void maxLengthBetweenEqualCharacters1() {
    Solution s = new Solution();
    assertEquals(2, s.maxLengthBetweenEqualCharacters("abca"));
  }

  @Test
  @DisplayName("'cbzxy'")
  void maxLengthBetweenEqualCharacters2() {
    Solution s = new Solution();
    assertEquals(-1, s.maxLengthBetweenEqualCharacters("cbzxy"));
  }
}