from typing import List


class Solution:
    map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "qprs",
        "8": "tuv",
        "9": "wxyz",
    }

    def letterCombinations(self, digits: str) -> List[str]:
        res = []

        def backtrack(i=0, cur=""):
            if len(cur) == len(digits):
                res.append(cur)
                return
            for c in self.map[digits[i]]:
                backtrack(i + 1, cur + c)

        if digits:
            backtrack()

        return res


# https://leetcode.com/problems/letter-combinations-of-a-phone-number/
