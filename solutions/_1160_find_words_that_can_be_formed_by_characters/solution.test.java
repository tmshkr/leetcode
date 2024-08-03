
package _1160_find_words_that_can_be_formed_by_characters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['cat','bt','hat','tree'],'atach'")
  void countCharacters0() {
    Solution s = new Solution();
    String[] words = new String[] { "cat", "bt", "hat", "tree" };
    String chars = "atach";
    int expected = 6;
    int result = s.countCharacters(words, chars);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("['hello','world','leetcode'],'welldonehoneyr'")
  void countCharacters1() {
    Solution s = new Solution();
    String[] words = new String[] { "hello", "world", "leetcode" };
    String chars = "welldonehoneyr";
    int expected = 10;
    int result = s.countCharacters(words, chars);
    assertEquals(expected, result);
  }
}