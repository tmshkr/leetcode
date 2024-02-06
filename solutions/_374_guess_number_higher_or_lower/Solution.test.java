
package _374_guess_number_higher_or_lower;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("10,6")
  void guessNumber0() {
    Solution s = new Solution(6);
    assertEquals(6, s.guessNumber(10));
  }

  @Test
  @DisplayName("1,1")
  void guessNumber1() {
    Solution s = new Solution(1);
    assertEquals(1, s.guessNumber(1));
  }

  @Test
  @DisplayName("2,1")
  void guessNumber2() {
    Solution s = new Solution(1);
    assertEquals(1, s.guessNumber(2));
  }

}