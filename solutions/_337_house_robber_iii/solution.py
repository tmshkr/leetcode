from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        return max(self.dfs(root))

    def dfs(self, node):
        if not node:
            return [0, 0]
        left = self.dfs(node.left)
        right = self.dfs(node.right)
        return [node.val + left[1] + right[1], max(left) + max(right)]


# https://leetcode.com/problems/house-robber-iii/
