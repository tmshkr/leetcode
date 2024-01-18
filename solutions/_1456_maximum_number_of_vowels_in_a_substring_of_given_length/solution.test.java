
package _1456_maximum_number_of_vowels_in_a_substring_of_given_length;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abciiidef',3")
  void maxVowels0() {
    Solution s = new Solution();
    assertEquals(3, s.maxVowels("abciiidef", 3));

  }

  @Test
  @DisplayName("'aeiou',2")
  void maxVowels1() {
    Solution s = new Solution();
    assertEquals(2, s.maxVowels("aeiou", 2));
  }

  @Test
  @DisplayName("'leetcode',3")
  void maxVowels2() {
    Solution s = new Solution();
    assertEquals(2, s.maxVowels("leetcode", 3));
  }

}