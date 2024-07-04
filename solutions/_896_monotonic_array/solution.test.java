
package _896_monotonic_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,2,3]")
  void isMonotonic0() {
    Solution s = new Solution();
    int[] inputs = { 1, 2, 2, 3 };
    boolean expected = true;
    boolean actual = s.isMonotonic(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[6,5,4,4]")
  void isMonotonic1() {
    Solution s = new Solution();
    int[] inputs = { 6, 5, 4, 4 };
    boolean expected = true;
    boolean actual = s.isMonotonic(inputs);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,3,2]")
  void isMonotonic2() {
    Solution s = new Solution();
    int[] inputs = { 1, 3, 2 };
    boolean expected = false;
    boolean actual = s.isMonotonic(inputs);
    assertEquals(expected, actual);
  }

}