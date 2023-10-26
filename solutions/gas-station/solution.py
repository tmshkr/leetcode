from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        start = 0
        tank = 0
        totalGas = 0

        for i in range(len(gas)):
            diff = gas[i] - cost[i]
            tank += diff
            totalGas += diff

            if tank < 0:
                start = i + 1
                tank = 0

        return start if totalGas >= 0 else -1


# https://leetcode.com/problems/gas-station/
