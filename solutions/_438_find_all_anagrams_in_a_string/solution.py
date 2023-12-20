from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        start = 0
        pMap, sMap = {}, {}
        res = []

        for char in p:
            pMap[char] = 1 + pMap.get(char, 0)

        for i in range(len(s)):
            sMap[s[i]] = 1 + sMap.get(s[i], 0)

            if i >= len(p) - 1:
                if sMap == pMap:
                    res.append(start)

                charToRemove = s[start]
                sMap[charToRemove] -= 1
                if sMap[charToRemove] == 0:
                    del sMap[charToRemove]
                start += 1

        return res


# https://leetcode.com/problems/find-all-anagrams-in-a-string/
