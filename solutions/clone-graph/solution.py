# Definition for a Node.
class Node(object):
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node: Node) -> Node:
        graph = {}

        def clone(node):
            if node in graph:
                return graph[node]

            copy = Node(node.val)
            graph[node] = copy
            for neighbor in node.neighbors:
                copy.neighbors.append(clone(neighbor))
            return copy

        return clone(node) if node else None


# https://leetcode.com/problems/clone-graph/
