
package _904_fruit_into_baskets;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,1]")
  void totalFruit0() {
    Solution s = new Solution();
    int[] input = { 1, 2, 1 };
    int expected = 3;
    int actual = s.totalFruit(input);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[0,1,2,2]")
  void totalFruit1() {
    Solution s = new Solution();
    int[] input = { 0, 1, 2, 2 };
    int expected = 3;
    int actual = s.totalFruit(input);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3,2,2]")
  void totalFruit2() {
    Solution s = new Solution();
    int[] input = { 1, 2, 3, 2, 2 };
    int expected = 4;
    int actual = s.totalFruit(input);
    assertEquals(expected, actual);
  }

}