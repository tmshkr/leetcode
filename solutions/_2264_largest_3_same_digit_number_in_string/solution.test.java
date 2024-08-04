
package _2264_largest_3_same_digit_number_in_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'6777133339'")
  void largestGoodInteger0() {
    Solution s = new Solution();
    assertEquals("777", s.largestGoodInteger("6777133339"));
  }

  @Test
  @DisplayName("'2300019'")
  void largestGoodInteger1() {
    Solution s = new Solution();
    assertEquals("000", s.largestGoodInteger("2300019"));
  }

  @Test
  @DisplayName("'42352338'")
  void largestGoodInteger2() {
    Solution s = new Solution();
    assertEquals("", s.largestGoodInteger("42352338"));
  }
}