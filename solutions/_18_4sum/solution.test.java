package _18_4sum;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,0,-1,0,-2,2],0")
  void fourSum0() {
    Solution s = new Solution();
    int[] nums = { 1, 0, -1, 0, -2, 2 };
    int target = 0;
    int[][] expected = { { -2, -1, 1, 2 }, { -2, 0, 0, 2 }, { -1, 0, 0, 1 } };
    List<List<Integer>> actual = s.fourSum(nums, target);

    assertEquals(expected.length, actual.size());

    for (int i = 0; i < actual.size(); i++) {
      int[] arr = actual.get(i).stream().mapToInt(Integer::intValue).toArray();
      assertArrayEquals(expected[i], arr);
    }
  }

  @Test
  @DisplayName("[2,2,2,2,2],8")
  void fourSum1() {
    Solution s = new Solution();
    int[] nums = { 2, 2, 2, 2, 2 };
    int target = 8;
    int[][] expected = { { 2, 2, 2, 2 } };
    List<List<Integer>> actual = s.fourSum(nums, target);

    assertEquals(expected.length, actual.size());

    for (int i = 0; i < actual.size(); i++) {
      int[] arr = actual.get(i).stream().mapToInt(Integer::intValue).toArray();
      assertArrayEquals(expected[i], arr);
    }
  }

  @Test
  @DisplayName("[1000000000,1000000000,1000000000,1000000000],-294967296")
  void fourSum2() {
    Solution s = new Solution();
    int[] nums = { 1000000000, 1000000000, 1000000000, 1000000000 };
    int target = -294967296;
    int[][] expected = {};
    List<List<Integer>> actual = s.fourSum(nums, target);

    assertEquals(expected.length, actual.size());

    for (int i = 0; i < actual.size(); i++) {
      int[] arr = actual.get(i).stream().mapToInt(Integer::intValue).toArray();
      assertArrayEquals(expected[i], arr);
    }
  }
}
