class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        chars = set()
        l = 0
        longest = 0
        
        for r in range(len(s)):
            while s[r] in chars:
                chars.remove(s[l])
                l += 1
            chars.add(s[r])
            longest = max(longest, r - l + 1)
        
        return longest
        

# https://leetcode.com/problems/longest-substring-without-repeating-characters/
