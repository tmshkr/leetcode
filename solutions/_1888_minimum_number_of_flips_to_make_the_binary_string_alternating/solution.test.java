
package _1888_minimum_number_of_flips_to_make_the_binary_string_alternating;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'111000'")
  void minFlips0() {
    Solution s = new Solution();
    assertEquals(2, s.minFlips("111000"));
  }

  @Test
  @DisplayName("'010'")
  void minFlips1() {
    Solution s = new Solution();
    assertEquals(0, s.minFlips("010"));
  }

  @Test
  @DisplayName("'1110'")
  void minFlips2() {
    Solution s = new Solution();
    assertEquals(1, s.minFlips("1110"));
  }

  @Test
  @DisplayName("'01001001101'")
  void minFlips3() {
    Solution s = new Solution();
    assertEquals(2, s.minFlips("01001001101"));
  }

}