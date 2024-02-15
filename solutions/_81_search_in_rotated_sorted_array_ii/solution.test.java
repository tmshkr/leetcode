
package _81_search_in_rotated_sorted_array_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[2,5,6,0,0,1,2],0")
  void search0() {
    Solution s = new Solution();
    assertEquals(true, s.search(new int[] { 2, 5, 6, 0, 0, 1, 2 }, 0));
  }

  @Test
  @DisplayName("[2,5,6,0,0,1,2],3")
  void search1() {
    Solution s = new Solution();
    assertEquals(false, s.search(new int[] { 2, 5, 6, 0, 0, 1, 2 }, 3));
  }
}