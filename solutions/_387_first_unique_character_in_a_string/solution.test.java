package _387_first_unique_character_in_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'leetcode'")
  void firstUniqChar0() {
    Solution s = new Solution();
    assertEquals(0, s.firstUniqChar("leetcode"));
  }

  @Test
  @DisplayName("'loveleetcode'")
  void firstUniqChar1() {
    Solution s = new Solution();
    assertEquals(2, s.firstUniqChar("loveleetcode"));
  }

  @Test
  @DisplayName("'aabb'")
  void firstUniqChar2() {
    Solution s = new Solution();
    assertEquals(-1, s.firstUniqChar("aabb"));
  }
}