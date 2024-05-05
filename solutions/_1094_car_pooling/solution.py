from typing import List


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        stops = [0] * 1001
        for passengers, pickup, dropoff in trips:
            stops[pickup] += passengers
            stops[dropoff] -= passengers

        for passengers in stops:
            capacity -= passengers
            if capacity < 0:
                return False

        return True


# https://leetcode.com/problems/car-pooling/
