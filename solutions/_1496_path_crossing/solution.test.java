
package _1496_path_crossing;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'NES'")
  void isPathCrossing0() {
    Solution s = new Solution();
    assertEquals(false, s.isPathCrossing("NES"));
  }

  @Test
  @DisplayName("'NESWW'")
  void isPathCrossing1() {
    Solution s = new Solution();
    assertEquals(true, s.isPathCrossing("NESWW"));
  }
}