class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        res = 0
        count0 = 0
        count1 = 0

        for i in range(n):
            bit = int(s[i])
            if bit == i % 2:
                count1 += 1
            else:
                count0 += 1

        res = min(count0, count1)

        for i in range(n):
            bit = int(s[i])
            if bit == i % 2:
                count1 -= 1
            else:
                count0 -= 1
            if bit == (n + i) % 2:
                count1 += 1
            else:
                count0 += 1
            res = min(res, count0, count1)

        return res


# https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
