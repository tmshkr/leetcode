class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 26

        for c in range(len(s)):
            count[ord(s[c]) - 97] += 1
            count[ord(t[c]) - 97] -= 1

        for c in count:
            if c != 0:
                return False

        return True


# https://leetcode.com/problems/valid-anagram/
