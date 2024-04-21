from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def flipEquiv(self, a: Optional[TreeNode], b: Optional[TreeNode]) -> bool:
        if not a and not b:
            return True
        if not a or not b:
            return False
        if a.val != b.val:
            return False
        return (
            self.flipEquiv(a.left, b.left) and self.flipEquiv(a.right, b.right)
        ) or (self.flipEquiv(a.left, b.right) and self.flipEquiv(a.right, b.left))


# https://leetcode.com/problems/flip-equivalent-binary-trees/
