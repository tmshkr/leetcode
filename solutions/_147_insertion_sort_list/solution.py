from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        dummy = ListNode()
        prev = dummy
        curr = head

        while curr:
            if prev and prev.val > curr.val:
                prev = dummy

            while prev.next and prev.next.val < curr.val:
                prev = prev.next

            nxt = curr.next
            curr.next = prev.next
            prev.next = curr
            curr = nxt

        return dummy.next


# https://leetcode.com/problems/insertion-sort-list/
