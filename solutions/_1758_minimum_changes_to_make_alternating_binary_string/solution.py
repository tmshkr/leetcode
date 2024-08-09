class Solution:
    def minOperations(self, s: str) -> int:
        n = len(s)
        count1 = 0
        count2 = 0
        for i in range(n):
            if int(s[i]) == i % 2:
                count1 += 1
            else:
                count2 += 1
        return min(count1, count2)


# https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
