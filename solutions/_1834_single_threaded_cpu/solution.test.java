
package _1834_single_threaded_cpu;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[[1,2],[2,4],[3,2],[4,1]]")
  void getOrder0() {
    Solution s = new Solution();
    int[][] tasks = new int[][] { { 1, 2 }, { 2, 4 }, { 3, 2 }, { 4, 1 } };
    int[] expected = new int[] { 0, 2, 3, 1 };
    int[] result = s.getOrder(tasks);
    assertArrayEquals(expected, result);
  }

  @Test
  @DisplayName("[[7,10],[7,12],[7,5],[7,4],[7,2]]")
  void getOrder1() {
    Solution s = new Solution();
    int[][] tasks = new int[][] { { 7, 10 }, { 7, 12 }, { 7, 5 }, { 7, 4 }, { 7, 2 } };
    int[] expected = new int[] { 4, 3, 2, 0, 1 };
    int[] result = s.getOrder(tasks);
    assertArrayEquals(expected, result);
  }

}