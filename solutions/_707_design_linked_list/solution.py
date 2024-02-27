class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class MyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    def get(self, index: int) -> int:
        curr = self.head
        for _ in range(index):
            if curr is None:
                return -1
            curr = curr.next
        if curr is None:
            return -1
        return curr.val

    def addAtHead(self, val: int) -> None:
        node = ListNode(val)
        node.next = self.head
        self.head = node
        if self.tail is None:
            self.tail = node

    def addAtTail(self, val: int) -> None:
        node = ListNode(val)
        if self.tail is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

    def addAtIndex(self, index: int, val: int) -> None:
        if index == 0:
            self.addAtHead(val)
            return
        curr = self.head
        for _ in range(index - 1):
            if curr is None:
                return
            curr = curr.next
        if curr is None:
            return
        node = ListNode(val)
        node.next = curr.next
        curr.next = node
        if curr == self.tail:
            self.tail = node

    def deleteAtIndex(self, index: int) -> None:
        if index == 0:
            if self.head is None:
                return
            self.head = self.head.next
            if self.head is None:
                self.tail = None
            return
        curr = self.head
        for _ in range(index - 1):
            if curr is None:
                return
            curr = curr.next
        if curr is None or curr.next is None:
            return
        curr.next = curr.next.next
        if curr.next is None:
            self.tail = curr


# https://leetcode.com/problems/design-linked-list/
