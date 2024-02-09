class Solution:
    def mySqrt(self, x: int) -> int:
        lo = 0
        hi = x
        while lo <= hi:
            mid = (lo + hi) // 2
            squared = mid * mid
            if squared < x:
                lo = mid + 1
            elif squared > x:
                hi = mid - 1
            else:
                return mid
        return hi


# https://leetcode.com/problems/sqrtx/
