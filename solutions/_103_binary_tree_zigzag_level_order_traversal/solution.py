from typing import List, Optional
from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = []
        q = deque([root])
        reverse = False

        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                if reverse:
                    level.insert(0, node.val)
                else:
                    level.append(node.val)

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            res.append(level)
            reverse = not reverse

        return res


# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
