from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        left = ListNode()
        right = ListNode()
        lesser = left
        greater = right
        curr = head
        while curr:
            if curr.val < x:
                lesser.next = curr
                lesser = lesser.next
            else:
                greater.next = curr
                greater = greater.next

            curr = curr.next

        lesser.next = right.next
        greater.next = None

        return left.next


# https://leetcode.com/problems/partition-list/
