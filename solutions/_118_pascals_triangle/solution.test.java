package _118_pascals_triangle;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("5")
  void generate0() {
    Solution s = new Solution();
    int inputs = 5;

    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(1));
    expected.add(Arrays.asList(1, 1));
    expected.add(Arrays.asList(1, 2, 1));
    expected.add(Arrays.asList(1, 3, 3, 1));
    expected.add(Arrays.asList(1, 4, 6, 4, 1));

    assertEquals(5, s.generate(5).size());
    assertEquals(expected, s.generate(inputs));
  }

  @Test
  @DisplayName("1")
  void generate1() {
    Solution s = new Solution();
    int inputs = 1;
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(1));

    assertEquals(1, s.generate(1).size());
    assertEquals(expected, s.generate(inputs));
  }
}
