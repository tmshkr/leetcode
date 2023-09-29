from typing import List


class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        prices = [float("inf")] * n
        prices[src] = 0

        for _ in range(k + 1):
            newPrices = prices.copy()

            for source, dest, price in flights:
                if prices[source] == float("inf"):
                    continue
                if prices[source] + price < newPrices[dest]:
                    newPrices[dest] = prices[source] + price
            prices = newPrices
        return -1 if prices[dst] == float("inf") else prices[dst]


# https://leetcode.com/problems/cheapest-flights-within-k-stops/
