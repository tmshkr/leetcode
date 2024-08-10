
package _1897_redistribute_characters_to_make_all_strings_equal;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['abc','aabc','bc']")
  void makeEqual0() {
    Solution s = new Solution();
    assertEquals(true, s.makeEqual(new String[] { "abc", "aabc", "bc" }));
  }

  @Test
  @DisplayName("['ab','a']")
  void makeEqual1() {
    Solution s = new Solution();
    assertEquals(false, s.makeEqual(new String[] { "ab", "a" }));
  }
}