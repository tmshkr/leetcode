
package _367_valid_perfect_square;

class Solution {
    public boolean isPerfectSquare(int num) {
        long L = 1;
        long R = num;
        while (L <= R) {
            long mid = L + (R - L) / 2;
            long guess = mid * mid;
            if (guess > num)
                R = mid - 1;
            else if (guess < num)
                L = mid + 1;
            else
                return true;

        }
        return false;
    }
}

/*
 * https://leetcode.com/problems/valid-perfect-square/
 */