package _448_find_all_numbers_disappeared_in_an_array;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[4,3,2,7,8,2,3,1]")
  void findDisappearedNumbers0() {
    Solution s = new Solution();
    int[] inputs = { 4, 3, 2, 7, 8, 2, 3, 1 };
    int[] expected = { 5, 6 };
    int[] actual = s
      .findDisappearedNumbers(inputs)
      .stream()
      .mapToInt(i -> i)
      .toArray();
    assertArrayEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,1]")
  void findDisappearedNumbers1() {
    Solution s = new Solution();
    int[] inputs = { 1, 1 };
    int[] expected = { 2 };
    int[] actual = s
      .findDisappearedNumbers(inputs)
      .stream()
      .mapToInt(i -> i)
      .toArray();
    assertArrayEquals(expected, actual);
  }
}
