from typing import List
from collections import defaultdict


class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        count = defaultdict(int)
        l = 0
        res = 0

        for r, fruit in enumerate(fruits):
            count[fruit] += 1
            if len(count) > 2:
                last_fruit = fruits[l]
                count[last_fruit] -= 1
                if count[last_fruit] == 0:
                    del count[last_fruit]
                l += 1
            res = max(res, r - l + 1)

        return res


# https://leetcode.com/problems/fruit-into-baskets/
