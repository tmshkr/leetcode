
package _455_assign_cookies;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3],[1,1]")
  void findContentChildren0() {
    Solution sln = new Solution();
    int[] g = { 1, 2, 3 };
    int[] s = { 1, 1 };
    int expected = 1;
    int actual = sln.findContentChildren(g, s);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2],[1,2,3]")
  void findContentChildren1() {
    Solution sln = new Solution();
    int[] g = { 1, 2 };
    int[] s = { 1, 2, 3 };
    int expected = 2;
    int actual = sln.findContentChildren(g, s);
    assertEquals(expected, actual);
  }
}