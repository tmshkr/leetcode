package _1963_minimum_number_of_swaps_to_make_the_string_balanced;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'][]['")
  void minSwaps0() {
    Solution s = new Solution();
    assertEquals(1, s.minSwaps("][]["));
  }

  @Test
  @DisplayName("']]][[['")
  void minSwaps1() {
    Solution s = new Solution();
    assertEquals(2, s.minSwaps("]]][[["));
  }

  @Test
  @DisplayName("'[]'")
  void minSwaps2() {
    Solution s = new Solution();
    assertEquals(0, s.minSwaps("[]"));
  }
}
