
package _1094_car_pooling;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[[2,1,5],[3,3,7]],4")
  void carPooling0() {
    Solution s = new Solution();
    int[][] trips = new int[][] { { 2, 1, 5 }, { 3, 3, 7 } };
    int capacity = 4;
    boolean expected = false;
    boolean actual = s.carPooling(trips, capacity);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[[2,1,5],[3,3,7]],5")
  void carPooling1() {
    Solution s = new Solution();
    int[][] trips = new int[][] { { 2, 1, 5 }, { 3, 3, 7 } };
    int capacity = 5;
    boolean expected = true;
    boolean actual = s.carPooling(trips, capacity);
    assertEquals(expected, actual);
  }
}