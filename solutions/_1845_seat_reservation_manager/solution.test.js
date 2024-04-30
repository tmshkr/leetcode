
const { SeatManager } = require("./solution.js");

test(`SeatManager`, () => {
const seatManager = new SeatManager(5);

  expect(seatManager.reserve()).toEqual(1);
  expect(seatManager.reserve()).toEqual(2);
  seatManager.unreserve(2);
  expect(seatManager.reserve()).toEqual(2);
  expect(seatManager.reserve()).toEqual(3);
  expect(seatManager.reserve()).toEqual(4);
  expect(seatManager.reserve()).toEqual(5);
  seatManager.unreserve(5);
});
