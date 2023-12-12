package _554_brick_wall;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]")
  void leastBricks0() {
    Solution s = new Solution();
    List<List<Integer>> wall = Arrays.asList(
      Arrays.asList(1, 2, 2, 1),
      Arrays.asList(3, 1, 2),
      Arrays.asList(1, 3, 2),
      Arrays.asList(2, 4),
      Arrays.asList(3, 1, 2),
      Arrays.asList(1, 3, 1, 1)
    );
    int expected = 2;
    int actual = s.leastBricks(wall);

    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[[1],[1],[1]]")
  void leastBricks1() {
    Solution s = new Solution();
    List<List<Integer>> wall = Arrays.asList(
      Arrays.asList(1),
      Arrays.asList(1),
      Arrays.asList(1)
    );
    int expected = 3;
    int actual = s.leastBricks(wall);

    assertEquals(expected, actual);
  }
}
