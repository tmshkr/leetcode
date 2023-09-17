# Definition for a Node.
class Node(object):
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node: Node, map={}) -> Node:
        if node is None:
            return None

        if node not in map:
            copy = Node(node.val)
            map[node] = copy
            for neighbor in node.neighbors:
                copy.neighbors.append(self.cloneGraph(neighbor, map))

        return map[node]


# https://leetcode.com/problems/clone-graph/
