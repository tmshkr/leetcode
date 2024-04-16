
package _1376_time_needed_to_inform_all_employees;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("1,0,[-1],[0]")
  void numOfMinutes0() {
    Solution s = new Solution();
    int n = 1;
    int headID = 0;
    int[] managers = new int[] { -1 };
    int[] informTime = new int[] { 0 };
    assertEquals(0, s.numOfMinutes(n, headID, managers, informTime));
  }

  @Test
  @DisplayName("6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]")
  void numOfMinutes1() {
    Solution s = new Solution();
    int n = 6;
    int headID = 2;
    int[] managers = new int[] { 2, 2, -1, 2, 2, 2 };
    int[] informTime = new int[] { 0, 0, 1, 0, 0, 0 };
    assertEquals(1, s.numOfMinutes(n, headID, managers, informTime));
  }

}