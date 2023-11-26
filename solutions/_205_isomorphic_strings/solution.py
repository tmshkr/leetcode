class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s2t, t2s = {}, {}

        for sChar, tChar in zip(s, t):
            if (sChar in s2t and s2t[sChar] != tChar) or (
                tChar in t2s and t2s[tChar] != sChar
            ):
                return False
            s2t[sChar] = tChar
            t2s[tChar] = sChar

        return True


# https://leetcode.com/problems/isomorphic-strings/
