
package _1094_car_pooling;

class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        int[] stops = new int[1001];
        for (int[] trip : trips) {
            stops[trip[1]] += trip[0]; // add passengers at pickup
            stops[trip[2]] -= trip[0]; // remove passengers at dropoff
        }
        for (int passengers : stops) {
            capacity -= passengers;
            if (capacity < 0) {
                return false;
            }
        }
        return true;
    }
}

/*
 * https://leetcode.com/problems/car-pooling/
 */