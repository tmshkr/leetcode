
package _1209_remove_all_adjacent_duplicates_in_string_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abcd',2")
  void removeDuplicates0() {
    Solution s = new Solution();
    assertEquals("abcd", s.removeDuplicates("abcd", 2));
  }

  @Test
  @DisplayName("'deeedbbcccbdaa',3")
  void removeDuplicates1() {
    Solution s = new Solution();
    assertEquals("aa", s.removeDuplicates("deeedbbcccbdaa", 3));
  }

  @Test
  @DisplayName("'pbbcggttciiippooaais',2")
  void removeDuplicates2() {
    Solution s = new Solution();
    assertEquals("ps", s.removeDuplicates("pbbcggttciiippooaais", 2));
  }

}