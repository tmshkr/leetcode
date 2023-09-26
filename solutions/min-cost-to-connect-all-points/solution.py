from typing import List


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        def manhattan_distance(p1, p2):
            return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])

        n = len(points)
        edges = []  # List of (distance, point1, point2)

        for i in range(n):
            for j in range(i + 1, n):
                distance = manhattan_distance(points[i], points[j])
                edges.append((distance, i, j))

        edges.sort()  # Sort edges by distance

        # Initialize Union-Find data structure
        parent = list(range(n))

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        total_cost = 0
        num_edges_added = 0

        for distance, u, v in edges:
            root_u = find(u)
            root_v = find(v)

            if root_u != root_v:
                total_cost += distance
                parent[root_u] = root_v
                num_edges_added += 1

            if num_edges_added == n - 1:
                break  # We have added enough edges to form the minimum spanning tree

        return total_cost


# https://leetcode.com/problems/min-cost-to-connect-all-points/
