from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        return self.dfs(root, 0)

    def dfs(self, node, total):
        if not node:
            return 0
        total = total * 10 + node.val
        if not node.left and not node.right:
            return total
        return self.dfs(node.left, total) + self.dfs(node.right, total)


# https://leetcode.com/problems/sum-root-to-leaf-numbers/
