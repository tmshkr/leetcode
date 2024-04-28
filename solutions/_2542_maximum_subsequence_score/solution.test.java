
package _2542_maximum_subsequence_score;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,3,3,2],[2,1,3,4],3")
  void maxScore0() {
    Solution s = new Solution();
    int[] A = { 1, 3, 3, 2 };
    int[] B = { 2, 1, 3, 4 };
    int k = 3;
    long expected = 12;
    long actual = s.maxScore(A, B, k);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[4,2,3,1,1],[7,5,10,9,6],1")
  void maxScore1() {
    Solution s = new Solution();
    int[] A = { 4, 2, 3, 1, 1 };
    int[] B = { 7, 5, 10, 9, 6 };
    int k = 1;
    long expected = 30;
    long actual = s.maxScore(A, B, k);
    assertEquals(expected, actual);
  }

}