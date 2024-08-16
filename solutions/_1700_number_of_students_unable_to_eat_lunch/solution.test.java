package _1700_number_of_students_unable_to_eat_lunch;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,1,0,0],[0,1,0,1]")
  void countStudents0() {
    Solution s = new Solution();
    int[] students = new int[] { 1, 1, 0, 0 };
    int[] sandwiches = new int[] { 0, 1, 0, 1 };
    int expected = 0;
    int actual = s.countStudents(students, sandwiches);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,1,1,0,0,1],[1,0,0,0,1,1]")
  void countStudents1() {
    Solution s = new Solution();
    int[] students = new int[] { 1, 1, 1, 0, 0, 1 };
    int[] sandwiches = new int[] { 1, 0, 0, 0, 1, 1 };
    int expected = 3;
    int actual = s.countStudents(students, sandwiches);
    assertEquals(expected, actual);
  }
}