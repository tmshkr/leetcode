
package _93_restore_ip_addresses;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("'25525511135'")
  void restoreIpAddresses0() {
    Solution s = new Solution();
    List<String> actual = s.restoreIpAddresses("25525511135");
    List<String> expected = Arrays.asList("255.255.11.135", "255.255.111.35");
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'0000'")
  void restoreIpAddresses1() {
    Solution s = new Solution();
    List<String> actual = s.restoreIpAddresses("0000");
    List<String> expected = Arrays.asList("0.0.0.0");
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("'101023'")
  void restoreIpAddresses2() {
    Solution s = new Solution();
    List<String> actual = s.restoreIpAddresses("101023");
    List<String> expected = Arrays.asList("1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3");
    assertEquals(expected, actual);
  }

}