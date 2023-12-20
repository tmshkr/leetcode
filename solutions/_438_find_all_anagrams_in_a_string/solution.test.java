package _438_find_all_anagrams_in_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'cbaebabacd','abc'")
  void findAnagrams0() {
    Solution s = new Solution();
    List<Integer> expected = List.of(0, 6);
    List<Integer> actual = s.findAnagrams("cbaebabacd", "abc");
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'abab','ab'")
  void findAnagrams1() {
    Solution s = new Solution();
    List<Integer> expected = List.of(0, 1, 2);
    List<Integer> actual = s.findAnagrams("abab", "ab");
    assertEquals(expected, actual);
  }
}
