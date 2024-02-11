from typing import List


class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def is_possible(capacity: int) -> bool:
            days_needed = 1
            shipment_weight = 0
            for w in weights:
                if shipment_weight + w > capacity:
                    days_needed += 1
                    shipment_weight = 0
                shipment_weight += w
            return days_needed <= days

        L = max(weights)
        R = sum(weights)
        while L < R:
            mid = (L + R) // 2
            if is_possible(mid):
                R = mid
            else:
                L = mid + 1
        return L


# https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
