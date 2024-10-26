package _1046_last_stone_weight;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {


  @Test
  @DisplayName("[2,7,4,1,8,1]")
  void lastStoneWeight0() {
    Solution s = new Solution();
    int[] stones = {2,7,4,1,8,1};
    int expected = 1;
    int actual = s.lastStoneWeight(stones);
    assertEquals(expected, actual);
  }
  
  @Test
  @DisplayName("[1]")
  void lastStoneWeight1() {
    Solution s = new Solution();
    int[] stones = {1};
    int expected = 1;
    int actual = s.lastStoneWeight(stones);
    assertEquals(expected, actual);
  }
}