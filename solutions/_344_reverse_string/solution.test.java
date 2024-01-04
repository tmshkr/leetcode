package _344_reverse_string;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['h','e','l','l','o']")
  void reverseString0() {
    Solution s = new Solution();
    char[] inputs = { 'h', 'e', 'l', 'l', 'o' };
    char[] expected = { 'o', 'l', 'l', 'e', 'h' };
    s.reverseString(inputs);
    assertArrayEquals(expected, inputs);
  }

  @Test
  @DisplayName("['H','a','n','n','a','h']")
  void reverseString1() {
    Solution s = new Solution();
    char[] inputs = { 'H', 'a', 'n', 'n', 'a', 'h' };
    char[] expected = { 'h', 'a', 'n', 'n', 'a', 'H' };
    s.reverseString(inputs);
    assertArrayEquals(expected, inputs);
  }
}
