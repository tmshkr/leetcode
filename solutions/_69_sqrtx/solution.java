package _69_sqrtx;

class Solution {
    public int mySqrt(int x) {
        long lo = 0;
        long hi = x;

        while (lo <= hi) {
            long mid = (lo + hi) / 2;
            long squared = mid * mid;
            if (squared < x)
                lo = mid + 1;
            else if (squared > x)
                hi = mid - 1;
            else
                return (int) mid;
        }

        return (int) hi;
    }
}

/*
 * https://leetcode.com/problems/sqrtx/
 */