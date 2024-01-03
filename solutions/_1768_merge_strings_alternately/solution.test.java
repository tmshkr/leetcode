package _1768_merge_strings_alternately;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abc','pqr'")
  void mergeAlternately0() {
    Solution s = new Solution();
    // inputs = "abc","pqr"
    // expected = "apbqcr"

    String actual = s.mergeAlternately("abc", "pqr");
    String expected = "apbqcr";
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'ab','pqrs'")
  void mergeAlternately1() {
    Solution s = new Solution();
    // inputs = "ab","pqrs"
    // expected = "apbqrs"

    String actual = s.mergeAlternately("ab", "pqrs");
    String expected = "apbqrs";
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'abcd','pq'")
  void mergeAlternately2() {
    Solution s = new Solution();
    // inputs = "abcd","pq"
    // expected = "apbqcd"

    String actual = s.mergeAlternately("abcd", "pq");
    String expected = "apbqcd";
    assertEquals(expected, actual);
  }
}
