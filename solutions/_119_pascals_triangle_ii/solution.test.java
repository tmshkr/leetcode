
package _119_pascals_triangle_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("3")
  void getRow0() {
    Solution s = new Solution();
    assertEquals(s.getRow(3), List.of(1, 3, 3, 1));
  }

  @Test
  @DisplayName("0")
  void getRow1() {
    Solution s = new Solution();
    assertEquals(s.getRow(0), List.of(1));
  }

  @Test
  @DisplayName("1")
  void getRow2() {
    Solution s = new Solution();
    assertEquals(s.getRow(1), List.of(1, 1));
  }
}