package _838_push_dominoes;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'RR.L'")
  void pushDominoes0() {
    Solution s = new Solution();
    // inputs = "RR.L"
    // expected = "RR.L"

    assertEquals("RR.L", s.pushDominoes("RR.L"));
  }

  @Test
  @DisplayName("'.L.R...LR..L..'")
  void pushDominoes1() {
    Solution s = new Solution();
    // inputs = ".L.R...LR..L.."
    // expected = "LL.RR.LLRRLL.."

    assertEquals("LL.RR.LLRRLL..", s.pushDominoes(".L.R...LR..L.."));
  }
}
