
package _1845_seat_reservation_manager;

import java.util.PriorityQueue;

class SeatManager {
    PriorityQueue<Integer> availableSeats;

    public SeatManager(int n) {
        availableSeats = new PriorityQueue<>();
        for (int i = 1; i <= n; i++) {
            availableSeats.add(i);
        }
    }

    public int reserve() {
        return availableSeats.poll();
    }

    public void unreserve(int seatNumber) {
        availableSeats.add(seatNumber);
    }
}

/*
 * https://leetcode.com/problems/seat-reservation-manager/
 */