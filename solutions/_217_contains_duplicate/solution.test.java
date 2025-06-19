package _217_contains_duplicate;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,1]")
  void containsDuplicate0() {
    Solution s = new Solution();
    boolean result = s.containsDuplicate(new int[] { 1, 2, 3, 1 });
    assertEquals(true, result);
  }

  @Test
  @DisplayName("[1,2,3,4]")
  void containsDuplicate1() {
    Solution s = new Solution();
    boolean result = s.containsDuplicate(new int[] { 1, 2, 3, 4 });
    assertEquals(false, result);
  }

  @Test
  @DisplayName("[1,1,1,3,3,4,3,2,4,2]")
  void containsDuplicate2() {
    Solution s = new Solution();
    boolean result = s.containsDuplicate(
      new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 }
    );
    assertEquals(true, result);
  }
}
