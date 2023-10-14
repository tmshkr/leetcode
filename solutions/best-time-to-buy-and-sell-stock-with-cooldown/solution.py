from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = -prices[0]
        sell = 0
        cooldown = 0

        for i in range(1, len(prices)):
            prevBuy = buy
            prevSell = sell
            prevCooldown = cooldown

            buy = max(prevBuy, prevCooldown - prices[i])
            sell = max(prevSell, prevBuy + prices[i])
            cooldown = max(prevCooldown, prevSell)

        return max(sell, cooldown)


# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
