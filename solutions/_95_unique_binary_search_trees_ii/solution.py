from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        self.memo = {}
        return self.generate(1, n) if n else []

    def generate(self, start, end):
        if start > end:
            return [None]
        if (start, end) in self.memo:
            return self.memo[(start, end)]
        res = []
        for val in range(start, end + 1):
            for left_tree in self.generate(start, val - 1):
                for right_tree in self.generate(val + 1, end):
                    node = TreeNode(val)
                    node.left = left_tree
                    node.right = right_tree
                    res.append(node)

        self.memo[(start, end)] = res
        return res


# https://leetcode.com/problems/unique-binary-search-trees-ii/
