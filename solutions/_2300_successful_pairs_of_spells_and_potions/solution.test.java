
package _2300_successful_pairs_of_spells_and_potions;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[5,1,3],[1,2,3,4,5],7")
  void successfulPairs0() {
    Solution s = new Solution();
    int[] spells = { 5, 1, 3 };
    int[] potions = { 1, 2, 3, 4, 5 };
    long success = 7;
    int[] expected = { 4, 0, 3 };
    assertArrayEquals(expected, s.successfulPairs(spells, potions, success));
  }

  @Test
  @DisplayName("[3,1,2],[8,5,8],16")
  void successfulPairs1() {
    Solution s = new Solution();
    int[] spells = { 3, 1, 2 };
    int[] potions = { 8, 5, 8 };
    long success = 16;
    int[] expected = { 2, 0, 2 };
    assertArrayEquals(expected, s.successfulPairs(spells, potions, success));
  }

}