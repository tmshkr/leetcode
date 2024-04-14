from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None

        self.postorder = postorder
        self.map = {val: i for i, val in enumerate(inorder)}
        return self.build(0, len(inorder) - 1, 0, len(postorder) - 1)

    def build(self, inStart: int, inEnd: int, postStart: int, postEnd: int):
        if inStart > inEnd or postStart > postEnd:
            return None

        node = TreeNode(self.postorder[postEnd])
        inIdx = self.map[node.val]
        leftSize = inIdx - inStart

        node.left = self.build(inStart, inIdx - 1, postStart, postStart + leftSize - 1)
        node.right = self.build(inIdx + 1, inEnd, postStart + leftSize, postEnd - 1)

        return node


# https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
