class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        L = 1
        R = num
        while L <= R:
            mid = (L + R) // 2
            guess = mid * mid
            if guess > num:
                R = mid - 1
            elif guess < num:
                L = mid + 1
            else:
                return True
        return False


# https://leetcode.com/problems/valid-perfect-square/
