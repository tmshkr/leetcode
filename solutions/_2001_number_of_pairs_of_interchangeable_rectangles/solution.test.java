package _2001_number_of_pairs_of_interchangeable_rectangles;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[[4,8],[3,6],[10,20],[15,30]]")
  void interchangeableRectangles0() {
    Solution s = new Solution();
    int[][] rectangles = new int[][] {
      { 4, 8 },
      { 3, 6 },
      { 10, 20 },
      { 15, 30 },
    };
    long actual = s.interchangeableRectangles(rectangles);
    long expected = 6;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[[4,5],[7,8]]")
  void interchangeableRectangles1() {
    Solution s = new Solution();
    int[][] rectangles = new int[][] { { 4, 5 }, { 7, 8 } };
    long actual = s.interchangeableRectangles(rectangles);
    long expected = 0;
    assertEquals(expected, actual);
  }
}
