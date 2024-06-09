
package _983_minimum_cost_for_tickets;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,4,6,7,8,20],[2,7,15]")
  void mincostTickets0() {
    Solution s = new Solution();
    int[] days = { 1, 4, 6, 7, 8, 20 };
    int[] costs = { 2, 7, 15 };
    int expected = 11;
    int result = s.mincostTickets(days, costs);
    assertEquals(expected, result);
  }

  @Test
  @DisplayName("[1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]")
  void mincostTickets1() {
    Solution s = new Solution();
    int[] days = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31 };
    int[] costs = { 2, 7, 15 };
    int expected = 17;
    int result = s.mincostTickets(days, costs);
    assertEquals(expected, result);
  }
}