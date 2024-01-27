
package _735_asteroid_collision;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[5,10,-5]")
  void asteroidCollision0() {
    Solution s = new Solution();
    int[] actual = s.asteroidCollision(new int[] { 5, 10, -5 });
    int[] expected = new int[] { 5, 10 };
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[8,-8]")
  void asteroidCollision1() {
    Solution s = new Solution();
    int[] actual = s.asteroidCollision(new int[] { 8, -8 });
    int[] expected = new int[] {};
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[10,2,-5]")
  void asteroidCollision2() {
    Solution s = new Solution();
    int[] actual = s.asteroidCollision(new int[] { 10, 2, -5 });
    int[] expected = new int[] { 10 };
    assertArrayEquals(expected, actual);
  }

}