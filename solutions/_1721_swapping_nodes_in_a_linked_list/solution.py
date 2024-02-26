from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # 1. Find the kth node from the start
        cur = head
        for _ in range(1, k):
            cur = cur.next
        left = cur

        # 2. Find the kth node from the end
        right = head
        while cur.next:
            cur = cur.next
            right = right.next

        # 3. Swap the values of the kth node from the start and the kth node from the end
        left.val, right.val = right.val, left.val
        return head


# https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
