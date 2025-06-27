class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_s = len(s)
        length_t = len(t)
        if length_s != length_t:
            return False

        ctr = [0] * 26

        for i in range(length_s):
            ctr[ord(s[i]) - 97] += 1
            ctr[ord(t[i]) - 97] -= 1

        for i in range(26):
            if ctr[i] != 0:
                return False

        return True


# https://leetcode.com/problems/valid-anagram/
