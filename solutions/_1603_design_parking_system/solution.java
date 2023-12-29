package _1603_design_parking_system;

class ParkingSystem {

  int[] spots;

  public ParkingSystem(int big, int medium, int small) {
    this.spots = new int[] { big, medium, small };
  }

  public boolean addCar(int carType) {
    if (this.spots[carType - 1] > 0) {
      this.spots[carType - 1]--;
      return true;
    }
    return false;
  }
}
/*
https://leetcode.com/problems/design-parking-system/
*/
