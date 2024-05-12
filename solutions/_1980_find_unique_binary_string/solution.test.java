
package _1980_find_unique_binary_string;

import static org.junit.Assert.assertNotEquals;

import java.util.Arrays;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['01','10']")
  void findDifferentBinaryString0() {
    Solution s = new Solution();
    String[] nums = { "01", "10" };
    String[] expected = { "00", "11" };
    String actual = s.findDifferentBinaryString(nums);
    int idx = Arrays.binarySearch(expected, actual);
    assertNotEquals(idx, -1);
  }

  @Test
  @DisplayName("['00','01']")
  void findDifferentBinaryString1() {
    Solution s = new Solution();
    String[] nums = { "00", "01" };
    String[] expected = { "10", "11" };
    String actual = s.findDifferentBinaryString(nums);
    int idx = Arrays.binarySearch(expected, actual);
    assertNotEquals(idx, -1);
  }

  @Test
  @DisplayName("['111','011','001']")
  void findDifferentBinaryString2() {
    Solution s = new Solution();
    String[] nums = { "111", "011", "001" };
    String[] expected = { "000", "010", "100", "101", "110" };
    String actual = s.findDifferentBinaryString(nums);
    int idx = Arrays.binarySearch(expected, actual);
    assertNotEquals(idx, -1);
  }
}