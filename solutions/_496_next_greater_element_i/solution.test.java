package _496_next_greater_element_i;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[4,1,2],[1,3,4,2]")
  void nextGreaterElement0() {
    Solution s = new Solution();
    int[] nums1 = { 4, 1, 2 };
    int[] nums2 = { 1, 3, 4, 2 };
    int[] expected = { -1, 3, -1 };
    int[] actual = s.nextGreaterElement(nums1, nums2);
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[2,4],[1,2,3,4]")
  void nextGreaterElement1() {
    Solution s = new Solution();
    int[] nums1 = { 2, 4 };
    int[] nums2 = { 1, 2, 3, 4 };
    int[] expected = { 3, -1 };
    int[] actual = s.nextGreaterElement(nums1, nums2);
    assertArrayEquals(expected, actual);
  }
}
