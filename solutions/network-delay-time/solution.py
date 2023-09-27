from typing import List
import heapq


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # Create an adjacency list to represent the graph.
        graph = [[] for _ in range(n + 1)]
        for u, v, w in times:
            graph[u].append((v, w))

        # Initialize distance array with maximum values.
        distance = [float('inf')] * (n + 1)
        distance[k] = 0

        # Create a priority queue (min-heap) and add the source node.
        pq = [(0, k)]

        while pq:
            dist, node = heapq.heappop(pq)

            for neighbor, weight in graph[node]:
                new_dist = dist + weight
                if new_dist < distance[neighbor]:
                    distance[neighbor] = new_dist
                    heapq.heappush(pq, (new_dist, neighbor))

        # Check for nodes that couldn't be reached.
        max_distance = max(distance[1:])

        return max_distance if max_distance < float('inf') else -1


# https://leetcode.com/problems/network-delay-time/
