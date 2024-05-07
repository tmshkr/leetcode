
package _47_permutations_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,2]")
  void permuteUnique0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 2 };
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(1, 1, 2));
    expected.add(Arrays.asList(1, 2, 1));
    expected.add(Arrays.asList(2, 1, 1));

    List<List<Integer>> actual = s.permuteUnique(nums);

    assertEquals(expected.size(), actual.size());
    for (int i = 0; i < expected.size(); i++) {
      assertEquals(new HashSet<>(expected.get(i)), new HashSet<>(actual.get(i)));
    }

  }

  @Test
  @DisplayName("[1,2,3]")
  void permuteUnique1() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3 };
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(1, 2, 3));
    expected.add(Arrays.asList(1, 3, 2));
    expected.add(Arrays.asList(2, 1, 3));
    expected.add(Arrays.asList(2, 3, 1));
    expected.add(Arrays.asList(3, 1, 2));
    expected.add(Arrays.asList(3, 2, 1));

    List<List<Integer>> actual = s.permuteUnique(nums);

    assertEquals(expected.size(), actual.size());
    for (int i = 0; i < expected.size(); i++) {
      assertEquals(new HashSet<>(expected.get(i)), new HashSet<>(actual.get(i)));
    }
  }

}