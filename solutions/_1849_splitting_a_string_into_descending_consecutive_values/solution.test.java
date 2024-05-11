
package _1849_splitting_a_string_into_descending_consecutive_values;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'1234'")
  void splitString0() {
    Solution s = new Solution();
    assertEquals(false, s.splitString("1234"));
  }

  @Test
  @DisplayName("'050043'")
  void splitString1() {
    Solution s = new Solution();
    assertEquals(true, s.splitString("050043"));
  }

  @Test
  @DisplayName("'9080701'")
  void splitString2() {
    Solution s = new Solution();
    assertEquals(false, s.splitString("9080701"));
  }

  @Test
  @DisplayName("'59376699145'")
  void splitString3() {
    Solution s = new Solution();
    assertEquals(false, s.splitString("59376699145"));
  }

  @Test
  @DisplayName("'64424509442147483647'")
  void splitString4() {
    Solution s = new Solution();
    assertEquals(false, s.splitString("64424509442147483647"));
  }

}