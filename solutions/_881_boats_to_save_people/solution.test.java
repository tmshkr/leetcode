package _881_boats_to_save_people;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2],3")
  void numRescueBoats0() {
    Solution s = new Solution();
    int[] people = { 1, 2 };
    int limit = 3;
    int expected = 1;
    int actual = s.numRescueBoats(people, limit);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,2,2,1],3")
  void numRescueBoats1() {
    Solution s = new Solution();
    int[] people = { 3, 2, 2, 1 };
    int limit = 3;
    int expected = 3;
    int actual = s.numRescueBoats(people, limit);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[3,5,3,4],5")
  void numRescueBoats2() {
    Solution s = new Solution();
    int[] people = { 3, 5, 3, 4 };
    int limit = 5;
    int expected = 4;
    int actual = s.numRescueBoats(people, limit);
    assertEquals(expected, actual);
  }
}
