from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.start = {}
        return self.dfs(root, 0, 0)

    def dfs(self, node, depth, pos):
        if not node:
            return 0
        if depth not in self.start:
            self.start[depth] = pos
        diff = pos - self.start[depth] + 1
        return max(
            diff,
            self.dfs(node.left, depth + 1, diff * 2),
            self.dfs(node.right, depth + 1, diff * 2 + 1),
        )


# https://leetcode.com/problems/maximum-width-of-binary-tree/
