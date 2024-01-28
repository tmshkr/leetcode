
package _901_online_stock_span;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("StockSpanner")
  void StockSpannerTest() {
    StockSpanner stockSpanner = new StockSpanner();
    
    assertEquals(stockSpanner.next(100), 1);
    assertEquals(stockSpanner.next(80), 1);
    assertEquals(stockSpanner.next(60), 1);
    assertEquals(stockSpanner.next(70), 2);
    assertEquals(stockSpanner.next(60), 1);
    assertEquals(stockSpanner.next(75), 4);
    assertEquals(stockSpanner.next(85), 6);
  }
}