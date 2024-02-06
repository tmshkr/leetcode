class Solution:
    def arrangeCoins(self, n: int) -> int:
        lo = 1
        hi = n
        res = 0

        while lo <= hi:
            mid = (lo + hi) // 2
            coins = (mid / 2) * (mid + 1)
            if coins > n:
                hi = mid - 1
            else:
                lo = mid + 1
                res = max(mid, res)

        return res


# https://leetcode.com/problems/arranging-coins/
