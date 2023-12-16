package _1930_unique_length_3_palindromic_subsequences;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'aabca'")
  void countPalindromicSubsequence0() {
    Solution s = new Solution();
    assertEquals(3, s.countPalindromicSubsequence("aabca"));
  }

  @Test
  @DisplayName("'adc'")
  void countPalindromicSubsequence1() {
    Solution s = new Solution();
    assertEquals(0, s.countPalindromicSubsequence("adc"));
  }

  @Test
  @DisplayName("'bbcbaba'")
  void countPalindromicSubsequence2() {
    Solution s = new Solution();
    assertEquals(4, s.countPalindromicSubsequence("bbcbaba"));
  }
}
