# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def __init__(self, pick: int):
        self.pick = pick

    def guess(self, num: int) -> int:
        if num > self.pick:
            return -1
        elif num < self.pick:
            return 1
        else:
            return 0

    def guessNumber(self, n: int) -> int:
        lo = 1
        hi = n

        while True:
            mid = lo + (hi - lo) // 2
            myGuess = self.guess(mid)
            if myGuess == 1:
                lo = mid + 1
            elif myGuess == -1:
                hi = mid - 1
            else:
                return mid


# https://leetcode.com/problems/guess-number-higher-or-lower/
