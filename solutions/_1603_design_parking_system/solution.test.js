const { ParkingSystem } = require("./solution.js");

test(`ParkingSystem`, () => {
  const parkingSystem = new ParkingSystem(1, 1, 0);

  expect(parkingSystem.addCar(1)).toEqual(true);
  expect(parkingSystem.addCar(2)).toEqual(true);
  expect(parkingSystem.addCar(3)).toEqual(false);
  expect(parkingSystem.addCar(1)).toEqual(false);
});
