class Solution:
    def partitionString(self, s: str) -> int:
        res = 1
        flag = 0

        for i in range(len(s)):
            val = ord(s[i]) - ord("a")
            if (flag & (1 << val)) != 0:
                flag = 0
                res += 1

            flag = flag | (1 << val)

        return res


# https://leetcode.com/problems/optimal-partition-of-string/
