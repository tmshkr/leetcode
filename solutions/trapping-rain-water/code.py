class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        if not height:
            return 0
        
        l = 0
        r = len(height) -  1
        lMax = height[l]
        rMax = height[r]
        res = 0

        while (l < r):
            if lMax < rMax:
                l += 1
                lMax = max(lMax, height[l])
                res += lMax - height[l]
            else:
                r -= 1
                rMax = max(rMax, height[r])
                res += rMax - height[r]
        
        return res
        

# https://leetcode.com/problems/trapping-rain-water/
