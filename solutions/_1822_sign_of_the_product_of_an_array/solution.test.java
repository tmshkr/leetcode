package _1822_sign_of_the_product_of_an_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[-1,-2,-3,-4,3,2,1]")
  void arraySign0() {
    Solution s = new Solution();
    int[] nums = { -1, -2, -3, -4, 3, 2, 1 };
    int expected = 1;
    int actual = s.arraySign(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,5,0,2,-3]")
  void arraySign1() {
    Solution s = new Solution();
    int[] nums = { 1, 5, 0, 2, -3 };
    int expected = 0;
    int actual = s.arraySign(nums);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[-1,1,-1,1,-1]")
  void arraySign2() {
    Solution s = new Solution();
    int[] nums = { -1, 1, -1, 1, -1 };
    int expected = -1;
    int actual = s.arraySign(nums);
    assertEquals(expected, actual);
  }
}
