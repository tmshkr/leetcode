
package _1985_find_the_kth_largest_integer_in_the_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['3','6','7','10'],4")
  void kthLargestNumber0() {
    Solution s = new Solution();
    String[] nums = { "3", "6", "7", "10" };
    int k = 4;
    assertEquals("3", s.kthLargestNumber(nums, k));
  }

  @Test
  @DisplayName("['2','21','12','1'],3")
  void kthLargestNumber1() {
    Solution s = new Solution();
    String[] nums = { "2", "21", "12", "1" };
    int k = 3;
    assertEquals("2", s.kthLargestNumber(nums, k));
  }

  @Test
  @DisplayName("['0','0'],2")
  void kthLargestNumber2() {
    Solution s = new Solution();
    String[] nums = { "0", "0" };
    int k = 2;
    assertEquals("0", s.kthLargestNumber(nums, k));
  }

}