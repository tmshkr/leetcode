class ParkingSystem {
  constructor(big, medium, small) {
    this.spots = [big, medium, small];
  }

  addCar(carType) {
    if (this.spots[carType - 1] > 0) {
      this.spots[carType - 1]--;
      return true;
    }
    return false;
  }
}

module.exports = { ParkingSystem };

/*
https://leetcode.com/problems/design-parking-system/
*/
