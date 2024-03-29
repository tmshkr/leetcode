from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def __init__(self):
        self.minDiff = float("inf")
        self.prev = None

    def inOrder(self, node: Optional[TreeNode]):
        if not node:
            return

        self.inOrder(node.left)
        if self.prev is not None:
            self.minDiff = min(self.minDiff, node.val - self.prev)

        self.prev = node.val
        self.inOrder(node.right)

    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        self.inOrder(root)
        return self.minDiff


# https://leetcode.com/problems/minimum-distance-between-bst-nodes/
