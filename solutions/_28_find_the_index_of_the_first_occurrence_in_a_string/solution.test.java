package _28_find_the_index_of_the_first_occurrence_in_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'sadbutsad','sad'")
  void strStr0() {
    Solution s = new Solution();
    // inputs = "sadbutsad","sad"
    // expected = 0

    assertEquals(0, s.strStr("sadbutsad", "sad"));
  }

  @Test
  @DisplayName("'leetcode','leeto'")
  void strStr1() {
    Solution s = new Solution();
    // inputs = "leetcode","leeto"
    // expected = -1

    assertEquals(-1, s.strStr("leetcode", "leeto"));
  }
}
