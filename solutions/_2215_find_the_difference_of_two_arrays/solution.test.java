package _2215_find_the_difference_of_two_arrays;

import static org.junit.Assert.assertArrayEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3],[2,4,6]")
  void findDifference0() {
    Solution s = new Solution();
    List<List<Integer>> result = s.findDifference(
      new int[] { 1, 2, 3 },
      new int[] { 2, 4, 6 }
    );

    int[] r0 = result.get(0).stream().mapToInt(Integer::intValue).toArray();
    int[] r1 = result.get(1).stream().mapToInt(Integer::intValue).toArray();

    assertArrayEquals(r0, new int[] { 1, 3 });
    assertArrayEquals(r1, new int[] { 4, 6 });
  }

  @Test
  @DisplayName("[1,2,3,3],[1,1,2,2]")
  void findDifference1() {
    Solution s = new Solution();
    List<List<Integer>> result = s.findDifference(
      new int[] { 1, 2, 3, 3 },
      new int[] { 1, 1, 2, 2 }
    );

    int[] r0 = result.get(0).stream().mapToInt(Integer::intValue).toArray();
    int[] r1 = result.get(1).stream().mapToInt(Integer::intValue).toArray();

    assertArrayEquals(r0, new int[] { 3 });
    assertArrayEquals(r1, new int[] {});
  }
}
