/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const stops = new Array(1001).fill(0);
  for (const [passengers, pickup, dropoff] of trips) {
    stops[pickup] += passengers;
    stops[dropoff] -= passengers;
  }
  for (const passengers of stops) {
    capacity -= passengers;
    if (capacity < 0) {
      return false;
    }
  }
  return true;
};

module.exports = { carPooling };

/*
https://leetcode.com/problems/car-pooling/
*/
