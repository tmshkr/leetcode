from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []

        def dfs(str, path=[]):
            if len(str) == 0:
                res.append(path)
                return
            for i in range(1, len(str)+1):
                substr = str[:i]
                if self.isPalindrome(substr):
                    dfs(str[i:], path + [substr])

        dfs(s)
        return res

    def isPalindrome(self, str):
        l = 0
        r = len(str)-1
        while l < r:
            if str[l] != str[r]:
                return False
            l += 1
            r -= 1
        return True


# https://leetcode.com/problems/palindrome-partitioning/
