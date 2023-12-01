package _303_range_sum_query_immutable;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("NumArray")
  void NumArray() {
    NumArray numArray = new NumArray(new int[] { -2, 0, 3, -5, 2, -1 });
    assertEquals(1, numArray.sumRange(0, 2));
    assertEquals(-1, numArray.sumRange(2, 5));
    assertEquals(-3, numArray.sumRange(0, 5));
  }
}
