
package _1422_maximum_score_after_splitting_a_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'011101'")
  void maxScore0() {
    Solution s = new Solution();
    assertEquals(5, s.maxScore("011101"));
  }

  @Test
  @DisplayName("'00111'")
  void maxScore1() {
    Solution s = new Solution();
    assertEquals(5, s.maxScore("00111"));
  }

  @Test
  @DisplayName("'1111'")
  void maxScore2() {
    Solution s = new Solution();
    assertEquals(3, s.maxScore("1111"));
  }
}