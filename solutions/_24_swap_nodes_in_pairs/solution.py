from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        a = head
        b = head.next
        a.next = self.swapPairs(b.next)
        b.next = a
        return b


# https://leetcode.com/problems/swap-nodes-in-pairs/
