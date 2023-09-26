from collections import defaultdict
from typing import List


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        # Create a dictionary to store the graph as an adjacency list
        graph = defaultdict(list)

        # Populate the graph
        for src, dest in tickets:
            graph[src].append(dest)

        # Sort the destinations in lexicographical order
        for src in graph:
            graph[src].sort()

        def dfs(node):
            nonlocal result
            while graph[node]:
                # Visit the smallest lexical destination
                next_node = graph[node].pop(0)
                dfs(next_node)
            result.append(node)

        result = []
        dfs("JFK")

        # Reverse the result since it's stored in reverse order during DFS
        return result[::-1]


# https://leetcode.com/problems/reconstruct-itinerary/
