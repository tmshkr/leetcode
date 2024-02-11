package _1011_capacity_to_ship_packages_within_d_days;

class Solution {
    private boolean isPossible(int[] weights, int days, int mid) {
        int daysNeeded = 1;
        int shipmentWeight = 0;
        for (int w : weights) {
            if (shipmentWeight + w > mid) {
                daysNeeded++;
                shipmentWeight = 0;
            }
            shipmentWeight += w;
        }
        return daysNeeded <= days;
    }

    public int shipWithinDays(int[] weights, int days) {
        int L = 0;
        int R = 0;
        for (int w : weights) {
            L = Math.max(L, w);
            R += w;
        }

        while (L < R) {
            int mid = L + (R - L) / 2;
            if (isPossible(weights, days, mid)) {
                R = mid;
            } else {
                L = mid + 1;
            }
        }
        return L;
    }
}

/*
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */