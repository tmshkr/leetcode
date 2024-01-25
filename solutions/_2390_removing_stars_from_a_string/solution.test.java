
package _2390_removing_stars_from_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'leet**cod*e'")
  void removeStars0() {
    Solution s = new Solution();
    assertEquals("lecoe", s.removeStars("leet**cod*e"));
  }

  @Test
  @DisplayName("'erase*****'")
  void removeStars1() {
    Solution s = new Solution();
    assertEquals("", s.removeStars("erase*****"));
  }
}