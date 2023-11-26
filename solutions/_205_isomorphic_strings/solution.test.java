package _205_isomorphic_strings;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("egg,add")
  void isIsomorphic0() {
    Solution s = new Solution();
    assertEquals(true, s.isIsomorphic("egg", "add"));
  }

  @Test
  @DisplayName("foo,bar")
  void isIsomorphic1() {
    Solution s = new Solution();
    assertEquals(false, s.isIsomorphic("foo", "bar"));
  }

  @Test
  @DisplayName("paper,title")
  void isIsomorphic2() {
    Solution s = new Solution();
    assertEquals(true, s.isIsomorphic("paper", "title"));
  }
}
