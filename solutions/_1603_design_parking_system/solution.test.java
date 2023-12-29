package _1603_design_parking_system;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("ParkingSystem")
  void ParkingSystemTest() {
    ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
    assertEquals(parkingSystem.addCar(1), true);
    assertEquals(parkingSystem.addCar(2), true);
    assertEquals(parkingSystem.addCar(3), false);
    assertEquals(parkingSystem.addCar(1), false);
  }
}
