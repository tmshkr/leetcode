
package _1845_seat_reservation_manager;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("SeatManager")
  void SeatManagerTest() {
    SeatManager seatManager = new SeatManager(5);
    
    assertEquals(seatManager.reserve(), 1);
    assertEquals(seatManager.reserve(), 2);
    seatManager.unreserve(2);
    assertEquals(seatManager.reserve(), 2);
    assertEquals(seatManager.reserve(), 3);
    assertEquals(seatManager.reserve(), 4);
    assertEquals(seatManager.reserve(), 5);
    seatManager.unreserve(5);
  }
}