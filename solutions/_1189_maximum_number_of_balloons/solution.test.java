package _1189_maximum_number_of_balloons;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'nlaebolko'")
  void maxNumberOfBalloons0() {
    Solution s = new Solution();
    assertEquals(1, s.maxNumberOfBalloons("nlaebolko"));
  }

  @Test
  @DisplayName("'loonbalxballpoon'")
  void maxNumberOfBalloons1() {
    Solution s = new Solution();
    assertEquals(2, s.maxNumberOfBalloons("loonbalxballpoon"));
  }

  @Test
  @DisplayName("'leetcode'")
  void maxNumberOfBalloons2() {
    Solution s = new Solution();
    assertEquals(0, s.maxNumberOfBalloons("leetcode"));
  }
}
