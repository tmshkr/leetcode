
package _1343_number_of_sub_arrays_of_size_k_and_average_greater_than_or_equal_to_threshold;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,2,2,2,5,5,5,8],3,4")
  void numOfSubarrays0() {
    Solution s = new Solution();
    int[] arr = { 2, 2, 2, 2, 5, 5, 5, 8 };
    int k = 3;
    int threshold = 4;
    int expected = 3;
    int actual = s.numOfSubarrays(arr, k, threshold);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[11,13,17,23,29,31,7,5,2,3],3,5")
  void numOfSubarrays1() {
    Solution s = new Solution();
    int[] arr = { 11, 13, 17, 23, 29, 31, 7, 5, 2, 3 };
    int k = 3;
    int threshold = 5;
    int expected = 6;
    int actual = s.numOfSubarrays(arr, k, threshold);
    assertEquals(expected, actual);
  }

}