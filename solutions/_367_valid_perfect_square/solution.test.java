
package _367_valid_perfect_square;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("16")
  void isPerfectSquare0() {
    Solution s = new Solution();
    assertEquals(true, s.isPerfectSquare(16));
  }

  @Test
  @DisplayName("14")
  void isPerfectSquare1() {
    Solution s = new Solution();
    assertEquals(false, s.isPerfectSquare(14));
  }

}