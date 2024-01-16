
package _1838_frequency_of_the_most_frequent_element;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,4],5")
  void maxFrequency0() {
    Solution s = new Solution();
    int[] nums = { 1, 2, 4 };
    int k = 5;
    int expected = 3;
    int actual = s.maxFrequency(nums, k);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,4,8,13],5")
  void maxFrequency1() {
    Solution s = new Solution();
    int[] nums = { 1, 4, 8, 13 };
    int k = 5;
    int expected = 2;
    int actual = s.maxFrequency(nums, k);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,9,6],2")
  void maxFrequency2() {
    Solution s = new Solution();
    int[] nums = { 3, 9, 6 };
    int k = 2;
    int expected = 1;
    int actual = s.maxFrequency(nums, k);
    assertEquals(expected, actual);
  }

}