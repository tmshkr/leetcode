
package _402_remove_k_digits;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'1432219',3")
  void removeKdigits0() {
    Solution s = new Solution();
    assertEquals("1219", s.removeKdigits("1432219", 3));
  }

  @Test
  @DisplayName("'10200',1")
  void removeKdigits1() {
    Solution s = new Solution();
    assertEquals("200", s.removeKdigits("10200", 1));
  }

  @Test
  @DisplayName("'10',2")
  void removeKdigits2() {
    Solution s = new Solution();
    assertEquals("0", s.removeKdigits("10", 2));
  }

}