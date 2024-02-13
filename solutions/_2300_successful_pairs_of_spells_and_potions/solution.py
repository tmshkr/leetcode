from typing import List


class Solution:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        potions.sort()
        n = len(potions)
        m = len(spells)
        pairs = [0] * m

        for i in range(m):
            L = 0
            R = n - 1

            while L <= R:
                mid = (L + R) // 2
                if spells[i] * potions[mid] >= success:
                    R = mid - 1
                else:
                    L = mid + 1

            if L < n:
                pairs[i] = n - L

        return pairs


# https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
