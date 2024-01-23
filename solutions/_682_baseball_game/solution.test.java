
package _682_baseball_game;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['5','2','C','D','+']")
  void calPoints0() {
    Solution s = new Solution();
    String[] inputs = new String[] { "5", "2", "C", "D", "+" };
    int expected = 30;
    int actual = s.calPoints(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("['5','-2','4','C','D','9','+','+']")
  void calPoints1() {
    Solution s = new Solution();
    String[] inputs = new String[] { "5", "-2", "4", "C", "D", "9", "+", "+" };
    int expected = 27;
    int actual = s.calPoints(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("['1','C']")
  void calPoints2() {
    Solution s = new Solution();
    String[] inputs = new String[] { "1", "C" };
    int expected = 0;
    int actual = s.calPoints(inputs);
    assertEquals(expected, actual);
  }

}