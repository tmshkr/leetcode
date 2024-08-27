package _905_sort_array_by_parity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,1,2,4]")
  void sortArrayByParity0() {
    Solution s = new Solution();
    int[] inputs = { 3, 1, 2, 4 };
    int[] expected = { 2, 4, 3, 1 };
    int[] result = s.sortArrayByParity(inputs);
    assertEquals(expected.length, result.length);
    assertArrayEquals(expected, result);
  }

  @Test
  @DisplayName("[0]")
  void sortArrayByParity1() {
    Solution s = new Solution();
    int[] inputs = { 0 };
    int[] expected = { 0 };
    int[] result = s.sortArrayByParity(inputs);
    assertEquals(expected.length, result.length);
    assertArrayEquals(expected, result);
  }
}