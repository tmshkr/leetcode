
package _77_combinations;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("4,2")
  void combine0() {
    Solution s = new Solution();
    List<List<Integer>> actual = s.combine(4, 2);
    List<List<Integer>> expected = List.of(
        List.of(1, 2),
        List.of(1, 3),
        List.of(1, 4),
        List.of(2, 3),
        List.of(2, 4),
        List.of(3, 4));
    assertEquals(actual.size(), expected.size());
    for (int i = 0; i < actual.size(); i++) {
      assertArrayEquals(expected.get(i).toArray(), actual.get(i).toArray());
    }

  }

  @Test
  @DisplayName("1,1")
  void combine1() {
    Solution s = new Solution();
    List<List<Integer>> actual = s.combine(1, 1);
    List<List<Integer>> expected = List.of(
        List.of(1));
    assertEquals(actual.size(), expected.size());
    for (int i = 0; i < actual.size(); i++) {
      assertArrayEquals(expected.get(i).toArray(), actual.get(i).toArray());
    }
  }

}