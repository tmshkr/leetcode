package _1408_string_matching_in_an_array;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("['mass', 'as', 'hero', 'superhero']")
  void stringMatching0() {
    Solution s = new Solution();
    String[] words = {"mass", "as", "hero", "superhero"};
    List<String> expected = Arrays.asList("as", "hero");
    List<String> actual = new ArrayList<>(s.stringMatching(words));
    Collections.sort(actual);
    Collections.sort(expected);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("['leetcode', 'et', 'code']")
  void stringMatching1() {
    Solution s = new Solution();
    String[] words = {"leetcode", "et", "code"};
    List<String> expected = Arrays.asList("et", "code");
    List<String> actual = new ArrayList<>(s.stringMatching(words));
    Collections.sort(actual);
    Collections.sort(expected);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("['blue', 'green', 'bu']")
  void stringMatching2() {
    Solution s = new Solution();
    String[] words = {"blue", "green", "bu"};
    List<String> expected = Arrays.asList();
    List<String> actual = new ArrayList<>(s.stringMatching(words));
    Collections.sort(actual);
    Collections.sort(expected);
    assertEquals(expected, actual);
  }
}
