from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        mid = self.get_mid(head)
        left = self.sortList(head)
        right = self.sortList(mid)

        return self.merge_two_sorted(left, right)

    def merge_two_sorted(
        self, left: Optional[ListNode], right: Optional[ListNode]
    ) -> Optional[ListNode]:
        if not left:
            return right

        if not right:
            return left

        dummy = ListNode()
        cur = dummy
        while left and right:
            if left.val < right.val:
                cur.next = left
                left = left.next
            else:
                cur.next = right
                right = right.next
            cur = cur.next

        if left:
            cur.next = left
        else:
            cur.next = right

        return dummy.next

    def get_mid(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        prev.next = None

        return slow


# https://leetcode.com/problems/sort-list/
