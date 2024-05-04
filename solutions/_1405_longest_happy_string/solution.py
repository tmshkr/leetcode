from heapq import heappush, heappop, heapify


class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        max_heap = []
        for count, char in [(-a, "a"), (-b, "b"), (-c, "c")]:
            if count:
                heappush(max_heap, (count, char))
        res = []
        while max_heap:
            countA, charA = heappop(max_heap)
            # Check if the last two characters are the same as the current character
            if len(res) > 1 and res[-1] == res[-2] == charA:
                if not max_heap:
                    break
                # If the current character is the same as the last two characters,
                # pick the next character
                countB, charB = heappop(max_heap)
                res.append(charB)
                countB += 1
                if countB:
                    heappush(max_heap, (countB, charB))
            else:
                res.append(charA)
                countA += 1
            if countA:
                heappush(max_heap, (countA, charA))

        return "".join(res)


# https://leetcode.com/problems/longest-happy-string/
