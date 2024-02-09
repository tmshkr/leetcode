
package _69_sqrtx;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("4")
  void mySqrt0() {
    Solution s = new Solution();
    assertEquals(2, s.mySqrt(4));
  }

  @Test
  @DisplayName("8")
  void mySqrt1() {
    Solution s = new Solution();
    assertEquals(2, s.mySqrt(8));
  }

}