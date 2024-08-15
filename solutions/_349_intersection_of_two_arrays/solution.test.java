
package _349_intersection_of_two_arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,2,1],[2,2]")
  void intersection0() {
    Solution s = new Solution();
    int[] nums1 = { 1, 2, 2, 1 };
    int[] nums2 = { 2, 2 };
    int[] expected = { 2 };
    int[] result = s.intersection(nums1, nums2);
    assertArrayEquals(expected, result);
  }

  @Test
  @DisplayName("[4,9,5],[9,4,9,8,4]")
  void intersection1() {
    Solution s = new Solution();
    int[] nums1 = { 4, 9, 5 };
    int[] nums2 = { 9, 4, 9, 8, 4 };
    int[] expected = { 4, 9 };
    int[] result = s.intersection(nums1, nums2);
    assertArrayEquals(expected, result);
  }

}