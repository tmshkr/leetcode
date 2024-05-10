
package _473_matchsticks_to_square;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,2,2,2]")
  void makesquare0() {
    Solution s = new Solution();
    int[] matchsticks = { 1, 1, 2, 2, 2 };
    boolean expected = true;
    boolean actual = s.makesquare(matchsticks);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,3,3,3,4]")
  void makesquare1() {
    Solution s = new Solution();
    int[] matchsticks = { 3, 3, 3, 3, 4 };
    boolean expected = false;
    boolean actual = s.makesquare(matchsticks);
    assertEquals(expected, actual);
  }

}