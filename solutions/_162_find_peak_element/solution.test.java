
package _162_find_peak_element;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,1]")
  void findPeakElement0() {
    Solution s = new Solution();
    int[] inputs = { 1, 2, 3, 1 };
    int expected = 2;
    int result = s.findPeakElement(inputs);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[1,2,1,3,5,6,4]")
  void findPeakElement1() {
    Solution s = new Solution();
    int[] inputs = { 1, 2, 1, 3, 5, 6, 4 };
    int expected = 5;
    int result = s.findPeakElement(inputs);
    assertEquals(expected, result);
  }

}