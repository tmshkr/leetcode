const { MinPriorityQueue } = require("datastructures-js");

class SeatManager {
  constructor(n) {
    this.availableSeats = MinPriorityQueue.fromArray(
      Array.from({ length: n }, (_, i) => i + 1)
    );
  }

  reserve() {
    const seat = this.availableSeats.dequeue();
    return seat;
  }

  unreserve(seatNumber) {
    this.availableSeats.enqueue(seatNumber);
  }
}

module.exports = { SeatManager };

/*
https://leetcode.com/problems/seat-reservation-manager/
*/
