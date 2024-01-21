
package _658_find_k_closest_elements;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4,5],4,3")
  void findClosestElements0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 4, 5 };
    int k = 4;
    int x = 3;
    int[] expected = { 1, 2, 3, 4 };
    var actual = s.findClosestElements(nums, k, x);
    assertArrayEquals(expected, actual.stream().mapToInt(num -> num).toArray());
  }

  @Test
  @DisplayName("[1,2,3,4,5],4,-1")
  void findClosestElements1() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 3, 4, 5 };
    int k = 4;
    int x = -1;
    int[] expected = { 1, 2, 3, 4 };
    var actual = s.findClosestElements(nums, k, x);
    assertArrayEquals(expected, actual.stream().mapToInt(num -> num).toArray());
  }

  @Test
  @DisplayName("[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4],4,3")
  void findClosestElements2() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4 };
    int k = 4;
    int x = 3;
    int[] expected = { 2, 2, 3, 3 };
    var actual = s.findClosestElements(nums, k, x);
    assertArrayEquals(expected, actual.stream().mapToInt(num -> num).toArray());
  }

}