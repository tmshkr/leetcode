
package _1882_process_tasks_using_servers;

import static org.junit.Assert.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[3,3,2],[1,2,3,2,1,2]")
  void assignTasks0() {
    Solution s = new Solution();
    int[] servers = { 3, 3, 2 };
    int[] tasks = { 1, 2, 3, 2, 1, 2 };
    int[] expected = { 2, 2, 0, 2, 1, 2 };
    int[] actual = s.assignTasks(servers, tasks);
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[5,1,4,3,2],[2,1,2,4,5,2,1]")
  void assignTasks1() {
    Solution s = new Solution();
    int[] servers = { 5, 1, 4, 3, 2 };
    int[] tasks = { 2, 1, 2, 4, 5, 2, 1 };
    int[] expected = { 1, 4, 1, 4, 1, 3, 2 };
    int[] actual = s.assignTasks(servers, tasks);
    assertArrayEquals(expected, actual);
  }
}