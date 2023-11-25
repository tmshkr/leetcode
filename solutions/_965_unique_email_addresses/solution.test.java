package _965_unique_email_addresses;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName(
    "test.email+alex@leetcode.com, test.e.mail+bob.cathy@leetcode.com, testemail+david@lee.tcode.com"
  )
  void numUniqueEmails0() {
    Solution s = new Solution();
    String[] emails = {
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com",
    };
    int expected = 2;
    int actual = s.numUniqueEmails(emails);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("a@leetcode.com, b@leetcode.com, c@leetcode.com")
  void numUniqueEmails1() {
    Solution s = new Solution();
    String[] emails = { "a@leetcode.com", "b@leetcode.com", "c@leetcode.com" };
    int expected = 3;
    int actual = s.numUniqueEmails(emails);
    assertEquals(expected, actual);
  }
}
