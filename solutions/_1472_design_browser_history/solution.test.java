
package _1472_design_browser_history;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  @Test
  @DisplayName("BrowserHistory")
  void BrowserHistoryTest() {
    BrowserHistory browserHistory = new BrowserHistory("leetcode.com");

    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.visit("youtube.com");
    assertEquals(browserHistory.back(1), "facebook.com");
    assertEquals(browserHistory.back(1), "google.com");
    assertEquals(browserHistory.forward(1), "facebook.com");
    browserHistory.visit("linkedin.com");
    assertEquals(browserHistory.forward(2), "linkedin.com");
    assertEquals(browserHistory.back(2), "google.com");
    assertEquals(browserHistory.back(7), "leetcode.com");
  }
}