
package _120_triangle;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.*;

class SolutionTest {

  @Test
  @DisplayName("[[2],[3,4],[6,5,7],[4,1,8,3]]")
  void minimumTotal0() {
    Solution s = new Solution();
    List<List<Integer>> triangle = new ArrayList<>();
    triangle.add(Arrays.asList(2));
    triangle.add(Arrays.asList(3, 4));
    triangle.add(Arrays.asList(6, 5, 7));
    triangle.add(Arrays.asList(4, 1, 8, 3));

    assertEquals(11, s.minimumTotal(triangle));

  }

  @Test
  @DisplayName("[[-10]]")
  void minimumTotal1() {
    Solution s = new Solution();
    List<List<Integer>> triangle = new ArrayList<>();
    triangle.add(Arrays.asList(-10));

    assertEquals(-10, s.minimumTotal(triangle));
  }

}