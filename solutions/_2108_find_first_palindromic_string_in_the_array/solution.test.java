package _2108_find_first_palindromic_string_in_the_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['abc','car','ada','racecar','cool']")
  void firstPalindrome0() {
    Solution s = new Solution();
    assertEquals("ada", s.firstPalindrome(new String[] { "abc", "car", "ada", "racecar", "cool" }));
  }

  @Test
  @DisplayName("['notapalindrome','racecar']")
  void firstPalindrome1() {
    Solution s = new Solution();
    assertEquals("racecar", s.firstPalindrome(new String[] { "notapalindrome", "racecar" }));
  }

  @Test
  @DisplayName("['def','ghi']")
  void firstPalindrome2() {
    Solution s = new Solution();
    assertEquals("", s.firstPalindrome(new String[] { "def", "ghi" }));
  }
}