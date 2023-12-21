package _179_largest_number;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[10,2]")
  void largestNumber0() {
    Solution s = new Solution();
    assertEquals("210", s.largestNumber(new int[] { 10, 2 }));
  }

  @Test
  @DisplayName("[3,30,34,5,9]")
  void largestNumber1() {
    Solution s = new Solution();
    assertEquals("9534330", s.largestNumber(new int[] { 3, 30, 34, 5, 9 }));
  }
}
