
package _2369_check_if_there_is_a_valid_partition_for_the_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[4,4,4,5,6]")
  void validPartition0() {
    Solution s = new Solution();
    int[] nums = { 4, 4, 4, 5, 6 };
    boolean expected = true;
    assertEquals(expected, s.validPartition(nums));
  }

  @Test
  @DisplayName("[1,1,1,2]")
  void validPartition1() {
    Solution s = new Solution();
    int[] nums = { 1, 1, 1, 2 };
    boolean expected = false;
    assertEquals(expected, s.validPartition(nums));
  }

  @Test
  @DisplayName("[2,2]")
  void validPartition2() {
    Solution s = new Solution();
    int[] nums = { 2, 2 };
    boolean expected = true;
    assertEquals(expected, s.validPartition(nums));
  }

}