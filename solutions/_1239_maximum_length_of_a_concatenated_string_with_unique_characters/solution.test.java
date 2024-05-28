
package _1239_maximum_length_of_a_concatenated_string_with_unique_characters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['un','iq','ue']")
  void maxLength0() {
    Solution s = new Solution();
    assertEquals(4, s.maxLength(Arrays.asList("un", "iq", "ue")));
  }

  @Test
  @DisplayName("['cha','r','act','ers']")
  void maxLength1() {
    Solution s = new Solution();
    assertEquals(6, s.maxLength(Arrays.asList("cha", "r", "act", "ers")));
  }

  @Test
  @DisplayName("['abcdefghijklmnopqrstuvwxyz']")
  void maxLength2() {
    Solution s = new Solution();
    assertEquals(26, s.maxLength(Arrays.asList("abcdefghijklmnopqrstuvwxyz")));
  }
}