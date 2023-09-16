class Solution(object):
    def characterReplacement(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        count = {}
        l = 0
        maxFreq = 0
        
        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxFreq = max(maxFreq, count[s[r]])

            if (r - l + 1) - maxFreq > k:
                count[s[l]] -= 1
                l += 1

        return (r - l + 1)

        

# https://leetcode.com/problems/longest-repeating-character-replacement/
