from typing import List


class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize:
            return False

        count = {}
        for card in hand:
            count[card] = 1 + count.get(card, 0)

        keys = sorted(count.keys())

        for key in keys:
            freq = count[key]
            if freq > 0:
                for i in range(1, groupSize):
                    if key+i not in count or count[key + i] < freq:
                        return False
                    count[key + i] -= freq

        return True


# https://leetcode.com/problems/hand-of-straights/
