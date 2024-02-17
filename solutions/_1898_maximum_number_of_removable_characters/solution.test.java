
package _1898_maximum_number_of_removable_characters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abcacb','ab',[3,1,0]")
  void maximumRemovals0() {
    Solution s = new Solution();
    assertEquals(2, s.maximumRemovals("abcacb", "ab", new int[] { 3, 1, 0 }));
  }

  @Test
  @DisplayName("'abcbddddd','abcd',[3,2,1,4,5,6]")
  void maximumRemovals1() {
    Solution s = new Solution();
    assertEquals(1, s.maximumRemovals("abcbddddd", "abcd", new int[] { 3, 2, 1, 4, 5, 6 }));
  }

  @Test
  @DisplayName("'abcab','abc',[0,1,2,3,4]")
  void maximumRemovals2() {
    Solution s = new Solution();
    assertEquals(0, s.maximumRemovals("abcab", "abc", new int[] { 0, 1, 2, 3, 4 }));
  }

}