from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head:
            return head

        length = 1
        curr = head
        while curr.next:
            curr = curr.next
            length += 1

        k = k % length
        if k == 0:
            return head

        curr.next = head
        for _ in range(length - k):
            curr = curr.next

        new_head = curr.next
        curr.next = None

        return new_head


# https://leetcode.com/problems/rotate-list/
