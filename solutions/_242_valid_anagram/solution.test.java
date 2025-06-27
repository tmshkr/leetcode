
package _242_valid_anagram;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'anagram','nagaram'")
  void isAnagram0() {
    Solution s = new Solution();
    boolean result = s.isAnagram("anagram", "nagaram");
    assertEquals(true, result);
  }

  @Test
  @DisplayName("'rat','car'")
  void isAnagram1() {
    Solution s = new Solution();
    boolean result = s.isAnagram("rat", "car");
    assertEquals(false, result);
  }
}