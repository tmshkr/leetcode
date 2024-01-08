package _80_remove_duplicates_from_sorted_array_ii;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,1,2,2,3]")
  void removeDuplicates0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1, 2, 2, 3 };
    int[] expected = { 1, 1, 2, 2, 3 };
    int k = s.removeDuplicates(nums);
    assertEquals(5, k);
    assertArrayEquals(Arrays.copyOfRange(nums, 0, k), expected);
  }

  @Test
  @DisplayName("[0,0,1,1,1,1,2,3,3]")
  void removeDuplicates1() {
    Solution s = new Solution();
    int[] nums = { 0, 0, 1, 1, 1, 1, 2, 3, 3 };
    int[] expected = { 0, 0, 1, 1, 2, 3, 3 };
    int k = s.removeDuplicates(nums);
    assertEquals(7, k);
    assertArrayEquals(Arrays.copyOfRange(nums, 0, k), expected);
  }
}
