package _441_arranging_coins;

class Solution {
    public int arrangeCoins(int n) {
        int lo = 1;
        int hi = n;
        int res = 0;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            double coins = (mid / 2.0) * (mid + 1);
            if (coins > n) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
                res = Math.max(mid, res);
            }
        }

        return res;
    }
}

/*
 * https://leetcode.com/problems/arranging-coins/
 */