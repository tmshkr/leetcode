package _290_word_pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abba','dog cat cat dog'")
  void wordPattern0() {
    Solution s = new Solution();
    assertEquals(true, s.wordPattern("abba", "dog cat cat dog"));
  }

  @Test
  @DisplayName("'abba','dog cat cat fish'")
  void wordPattern1() {
    Solution s = new Solution();
    assertEquals(false, s.wordPattern("abba", "dog cat cat fish"));
  }

  @Test
  @DisplayName("'aaaa','dog cat cat dog'")
  void wordPattern2() {
    Solution s = new Solution();
    assertEquals(false, s.wordPattern("aaaa", "dog cat cat dog"));
  }
}
