from typing import List
from collections import defaultdict

class DetectSquares:
    def __init__(self):
        self.counter = defaultdict(int)
        self.pts = []

    def add(self, point: List[int]) -> None:
        self.counter[tuple(point)] += 1
        self.pts.append(point)

    def count(self, point: List[int]) -> int:
        count = 0
        px, py = point
        for x, y in self.pts:
            if x == px or y == py:
                continue
            if (abs(py - y) != abs(px - x)):
                continue
            count += self.counter[(x, py)] * self.counter[(px, y)]
        
        return count
