package _88_merge_sorted_array;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,0,0,0],3,[2,5,6],3")
  void merge0() {
    Solution s = new Solution();
    int[] nums1 = new int[] { 1, 2, 3, 0, 0, 0 };
    int[] nums2 = new int[] { 2, 5, 6 };
    int[] expected = new int[] { 1, 2, 2, 3, 5, 6 };
    s.merge(nums1, 3, nums2, 3);
    assertArrayEquals(expected, nums1);
  }

  @Test
  @DisplayName("[1],1,[],0")
  void merge1() {
    Solution s = new Solution();
    int[] nums1 = new int[] { 1 };
    int[] nums2 = new int[] {};
    int[] expected = new int[] { 1 };
    s.merge(nums1, 1, nums2, 0);
    assertArrayEquals(expected, nums1);
  }

  @Test
  @DisplayName("[0],0,[1],1")
  void merge2() {
    Solution s = new Solution();
    int[] nums1 = new int[] { 0 };
    int[] nums2 = new int[] { 1 };
    int[] expected = new int[] { 1 };
    s.merge(nums1, 0, nums2, 1);
    assertArrayEquals(expected, nums1);
  }
}
