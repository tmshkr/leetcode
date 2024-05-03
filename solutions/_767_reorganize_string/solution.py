from collections import Counter
from heapq import heappop, heappush, heapify


class Solution:
    def reorganizeString(self, s: str) -> str:
        ctr = Counter(s)
        max_freq = ctr.most_common(1)[0][1]
        if max_freq > (len(s) + 1) // 2:
            return ""
        heap = [(-val, key) for key, val in ctr.items()]
        heapify(heap)
        res = []

        while len(heap) >= 2:
            freq1, char1 = heappop(heap)
            freq2, char2 = heappop(heap)
            res.extend([char1, char2])
            if freq1 + 1 < 0:
                heappush(heap, (freq1 + 1, char1))
            if freq2 + 1 < 0:
                heappush(heap, (freq2 + 1, char2))

        if heap:
            res.append(heap[0][1])

        return "".join(res)


# https://leetcode.com/problems/reorganize-string/
