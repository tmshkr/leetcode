from typing import List


class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        L = 0
        R = len(removable)
        while L < R:
            mid = (L + R) // 2
            if self.isSubsequence(s, p, removable, mid + 1):
                L = mid + 1
            else:
                R = mid
        return L

    def isSubsequence(self, s: str, p: str, removable: List[int], k: int) -> bool:
        removed = list(s)
        for i in range(k):
            removed[removable[i]] = ""
        i = 0
        j = 0
        while i < len(removed) and j < len(p):
            if removed[i] == p[j]:
                j += 1
            i += 1
        return j == len(p)


# https://leetcode.com/problems/maximum-number-of-removable-characters/
