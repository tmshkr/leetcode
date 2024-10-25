
package _1461_check_if_a_string_contains_all_binary_codes_of_size_k;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {


  @Test
  @DisplayName("'00110110',2")
  void hasAllCodes0() {
    Solution s = new Solution();
    assertEquals(true, s.hasAllCodes("00110110", 2));
  }
  
  @Test
  @DisplayName("'0110',1")
  void hasAllCodes1() {
    Solution s = new Solution();
    assertEquals(true, s.hasAllCodes("0110", 1));
  }
  
  @Test
  @DisplayName("'0110',2")
  void hasAllCodes2() {
    Solution s = new Solution();
    assertEquals(false, s.hasAllCodes("0110", 2));
  }  
}