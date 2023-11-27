package _605_can_place_flowers;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,0,0,0,1],1")
  void canPlaceFlowers0() {
    Solution s = new Solution();
    int[] flowerbed = { 1, 0, 0, 0, 1 };
    int n = 1;
    boolean expected = true;
    boolean actual = s.canPlaceFlowers(flowerbed, n);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,0,0,0,1],2")
  void canPlaceFlowers1() {
    Solution s = new Solution();
    int[] flowerbed = { 1, 0, 0, 0, 1 };
    int n = 2;
    boolean expected = false;
    boolean actual = s.canPlaceFlowers(flowerbed, n);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,0,1,0,1,0,1],0")
  void canPlaceFlowers2() {
    Solution s = new Solution();
    int[] flowerbed = { 1, 0, 1, 0, 1, 0, 1 };
    int n = 0;
    boolean expected = true;
    boolean actual = s.canPlaceFlowers(flowerbed, n);
    assertEquals(expected, actual);
  }
}
