from collections import Counter
class Solution(object):
    def checkInclusion(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        cntr = Counter(s1)
        w = len(s1)
        matches =  0     

        for i in range(len(s2)):
            if s2[i] in cntr:
                if cntr[s2[i]] == 0: matches -= 1
                cntr[s2[i]] -= 1
                if cntr[s2[i]] == 0: matches += 1

            if i >= w and s2[i - w] in cntr:
                if cntr[s2[i - w]] == 0: matches -= 1
                cntr[s2[i - w]] += 1
                if cntr[s2[i - w]] == 0: matches += 1

            if matches == len(cntr):
                return True
        
        return False

# https://leetcode.com/problems/permutation-in-string/
