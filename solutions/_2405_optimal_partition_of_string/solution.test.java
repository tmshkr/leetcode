package _2405_optimal_partition_of_string;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'abacaba'")
  void partitionString0() {
    Solution s = new Solution();
    int expected = 4;
    int actual = s.partitionString("abacaba");
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'ssssss'")
  void partitionString1() {
    Solution s = new Solution();
    int expected = 6;
    int actual = s.partitionString("ssssss");
    assertEquals(expected, actual);
  }
}
