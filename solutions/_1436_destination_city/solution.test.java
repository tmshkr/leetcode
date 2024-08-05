
package _1436_destination_city;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[['London','New York'],['New York','Lima'],['Lima','Sao Paulo']]")
  void destCity0() {
    Solution s = new Solution();
    List<List<String>> paths = new ArrayList<List<String>>();
    paths.add(Arrays.asList("London", "New York"));
    paths.add(Arrays.asList("New York", "Lima"));
    paths.add(Arrays.asList("Lima", "Sao Paulo"));
    String expected = "Sao Paulo";
    assertEquals(expected, s.destCity(paths));

  }

  @Test
  @DisplayName("[['B','C'],['D','B'],['C','A']]")
  void destCity1() {
    Solution s = new Solution();
    List<List<String>> paths = new ArrayList<List<String>>();
    paths.add(Arrays.asList("B", "C"));
    paths.add(Arrays.asList("D", "B"));
    paths.add(Arrays.asList("C", "A"));
    String expected = "A";
    assertEquals(expected, s.destCity(paths));
  }

  @Test
  @DisplayName("[['A','Z']]")
  void destCity2() {
    Solution s = new Solution();
    List<List<String>> paths = new ArrayList<List<String>>();
    paths.add(Arrays.asList("A", "Z"));
    String expected = "Z";
    assertEquals(expected, s.destCity(paths));
  }
}