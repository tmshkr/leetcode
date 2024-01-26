
package _946_validate_stack_sequences;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4,5],[4,5,3,2,1]")
  void validateStackSequences0() {
    Solution s = new Solution();
    int[] pushed = { 1, 2, 3, 4, 5 };
    int[] popped = { 4, 5, 3, 2, 1 };
    boolean actual = s.validateStackSequences(pushed, popped);
    boolean expected = true;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3,4,5],[4,3,5,1,2]")
  void validateStackSequences1() {
    Solution s = new Solution();
    int[] pushed = { 1, 2, 3, 4, 5 };
    int[] popped = { 4, 3, 5, 1, 2 };
    boolean actual = s.validateStackSequences(pushed, popped);
    boolean expected = false;
    assertEquals(expected, actual);
  }

}