
package _71_simplify_path;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'/home/'")
  void simplifyPath0() {
    Solution s = new Solution();
    String inputs = "/home/";
    String expected = "/home";
    String actual = s.simplifyPath(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'/../'")
  void simplifyPath1() {
    Solution s = new Solution();
    String inputs = "/../";
    String expected = "/";
    String actual = s.simplifyPath(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'/home//foo/'")
  void simplifyPath2() {
    Solution s = new Solution();
    String inputs = "/home//foo/";
    String expected = "/home/foo";
    String actual = s.simplifyPath(inputs);
    assertEquals(expected, actual);
  }

}