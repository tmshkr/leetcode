from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        n = 0
        curr = head

        while curr:
            n += 1
            curr = curr.next

        sizes = [(n // k) for _ in range(k)]
        for i in range(n % k):
            sizes[i] += 1

        res = [None] * k
        curr = head
        for i in range(k):
            if sizes[i] == 0:
                continue
            res[i] = curr
            for _ in range(1, sizes[i]):
                curr = curr.next
            nxt = curr.next
            curr.next = None
            curr = nxt

        return res


# https://leetcode.com/problems/split-linked-list-in-parts/
