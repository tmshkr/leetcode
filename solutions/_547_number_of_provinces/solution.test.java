package _547_number_of_provinces;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[[1,1,0],[1,1,0],[0,0,1]]")
  void findCircleNum0() {
    Solution s = new Solution();
    int[][] isConnected = new int[][] { { 1, 1, 0 }, { 1, 1, 0 }, { 0, 0, 1 } };
    int expected = 2;
    int actual = s.findCircleNum(isConnected);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[[1,0,0],[0,1,0],[0,0,1]]")
  void findCircleNum1() {
    Solution s = new Solution();
    int[][] isConnected = new int[][] { { 1, 0, 0 }, { 0, 1, 0 }, { 0, 0, 1 } };
    int expected = 3;
    int actual = s.findCircleNum(isConnected);
    assertEquals(expected, actual);
  }
}
