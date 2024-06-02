
package _279_perfect_squares;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("12")
  void numSquares0() {
    Solution s = new Solution();
    assertEquals(3, s.numSquares(12));
  }

  @Test
  @DisplayName("13")
  void numSquares1() {
    Solution s = new Solution();
    assertEquals(2, s.numSquares(13));
  }
}