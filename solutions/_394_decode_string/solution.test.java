
package _394_decode_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'3[a]2[bc]'")
  void decodeString0() {
    Solution s = new Solution();
    assertEquals("aaabcbc", s.decodeString("3[a]2[bc]"));
  }

  @Test
  @DisplayName("'3[a2[c]]'")
  void decodeString1() {
    Solution s = new Solution();
    assertEquals("accaccacc", s.decodeString("3[a2[c]]"));
  }

  @Test
  @DisplayName("'2[abc]3[cd]ef'")
  void decodeString2() {
    Solution s = new Solution();
    assertEquals("abcabccdcdcdef", s.decodeString("2[abc]3[cd]ef"));
  }

}