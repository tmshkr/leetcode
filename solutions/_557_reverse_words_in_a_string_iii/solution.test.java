
package _557_reverse_words_in_a_string_iii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'Let's take LeetCode contest'")
  void reverseWords0() {
    Solution s = new Solution();
    String input = "Let's take LeetCode contest";
    String expected = "s'teL ekat edoCteeL tsetnoc";
    assertEquals(expected, s.reverseWords(input));
  }

  @Test
  @DisplayName("'Mr Ding'")
  void reverseWords1() {
    Solution s = new Solution();
    String input = "Mr Ding";
    String expected = "rM gniD";
    assertEquals(expected, s.reverseWords(input));
  }
}