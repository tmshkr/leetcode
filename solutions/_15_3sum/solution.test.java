package _15_3sum;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  void compare(List<List<Integer>> expected, List<List<Integer>> actual) {
    assertEquals(expected.size(), actual.size());
    for (int i = 0; i < actual.size(); i++) {
      assertArrayEquals(actual.get(i).toArray(), expected.get(i).toArray());
    }
  }

  @Test
  @DisplayName("[-1,0,1,2,-1,-4]")
  void threeSum0() {
    Solution s = new Solution();

    int[] nums = new int[] { -1, 0, 1, 2, -1, -4 };
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(-1, -1, 2));
    expected.add(Arrays.asList(-1, 0, 1));

    List<List<Integer>> actual = s.threeSum(nums);

    compare(expected, actual);
  }

  @Test
  @DisplayName("[0,1,1]")
  void threeSum1() {
    Solution s = new Solution();

    int[] nums = new int[] { 0, 1, 1 };
    List<List<Integer>> expected = new ArrayList<>();

    List<List<Integer>> actual = s.threeSum(nums);

    compare(expected, actual);
  }

  @Test
  @DisplayName("[0,0,0]")
  void threeSum2() {
    Solution s = new Solution();

    int[] nums = new int[] { 0, 0, 0 };
    List<List<Integer>> expected = new ArrayList<>();
    expected.add(Arrays.asList(0, 0, 0));

    List<List<Integer>> actual = s.threeSum(nums);

    compare(expected, actual);
  }
}
