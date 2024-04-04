
package _1443_minimum_time_to_collect_all_apples_in_a_tree;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]")
  void minTime0() {
    Solution s = new Solution();
    int n = 7;
    int[][] edges = new int[][] { { 0, 1 }, { 0, 2 }, { 1, 4 }, { 1, 5 }, { 2, 3 }, { 2, 6 } };
    List<Boolean> hasApple = Arrays.asList(false, false, true, false, true, true, false);
    assertEquals(8, s.minTime(n, edges, hasApple));

  }

  @Test
  @DisplayName("7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]")
  void minTime1() {
    Solution s = new Solution();
    int n = 7;
    int[][] edges = new int[][] { { 0, 1 }, { 0, 2 }, { 1, 4 }, { 1, 5 }, { 2, 3 }, { 2, 6 } };
    List<Boolean> hasApple = Arrays.asList(false, false, true, false, false, true, false);
    assertEquals(6, s.minTime(n, edges, hasApple));
  }

  @Test
  @DisplayName("7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]")
  void minTime2() {
    Solution s = new Solution();
    int n = 7;
    int[][] edges = new int[][] { { 0, 1 }, { 0, 2 }, { 1, 4 }, { 1, 5 }, { 2, 3 }, { 2, 6 } };
    List<Boolean> hasApple = Arrays.asList(false, false, false, false, false, false, false);
    assertEquals(0, s.minTime(n, edges, hasApple));
  }

}