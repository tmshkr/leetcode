class Solution:
    MIN = -pow(2, 31)  # -2147483648
    MAX = pow(2, 31) - 1  # 2147483647

    def reverse(self, x: int) -> int:
        isNegative = x < 0
        x = abs(x)
        res = 0

        while x:
            digit = x % 10
            x = x // 10
            res = (res * 10) + digit
            if -res < self.MIN if isNegative else res > self.MAX:
                return 0

        return -res if isNegative else res


# https://leetcode.com/problems/reverse-integer/
