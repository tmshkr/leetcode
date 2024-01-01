package _680_valid_palindrome_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'aba'")
  void validPalindrome0() {
    Solution s = new Solution();
    assertEquals(true, s.validPalindrome("aba"));
  }

  @Test
  @DisplayName("'abca'")
  void validPalindrome1() {
    Solution s = new Solution();
    assertEquals(true, s.validPalindrome("abca"));
  }

  @Test
  @DisplayName("'abc'")
  void validPalindrome2() {
    Solution s = new Solution();
    assertEquals(false, s.validPalindrome("abc"));
  }
}
