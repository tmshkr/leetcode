package _26_remove_duplicates_from_sorted_array;

import static org.junit.Assert.assertArrayEquals;

import java.util.Arrays;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,2]")
  void removeDuplicates0() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 2 };
    int k = s.removeDuplicates(nums);
    int[] expected = { 1, 2 };
    assertArrayEquals(Arrays.copyOfRange(nums, 0, k), expected);
  }

  @Test
  @DisplayName("[0,0,1,1,1,2,2,3,3,4]")
  void removeDuplicates1() {
    Solution s = new Solution();
    int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
    int k = s.removeDuplicates(nums);
    int[] expected = { 0, 1, 2, 3, 4 };
    assertArrayEquals(Arrays.copyOfRange(nums, 0, k), expected);
  }
}
