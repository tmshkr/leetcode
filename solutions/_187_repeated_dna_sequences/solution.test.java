package _187_repeated_dna_sequences;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'")
  void findRepeatedDnaSequences0() {
    Solution s = new Solution();
    assertEquals(
      List.of("AAAAACCCCC", "CCCCCAAAAA"),
      s.findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
    );
  }

  @Test
  @DisplayName("'AAAAAAAAAAAAA'")
  void findRepeatedDnaSequences1() {
    Solution s = new Solution();
    assertEquals(
      List.of("AAAAAAAAAA"),
      s.findRepeatedDnaSequences("AAAAAAAAAAAAA")
    );
  }
}
