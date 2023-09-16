class MinStack:
    def __init__(self):
        self.head = None

    def push(self, val: int) -> None:
        if self.head:
            self.head = Node(val, min(val, self.head.min), self.head)
        else:
            self.head = Node(val, val, None)

    def pop(self) -> None:
        self.head = self.head.next

    def top(self) -> int:
        return self.head.val

    def getMin(self) -> int:
        return self.head.min

class Node:
    def __init__(self, val, min, next) -> None:
        self.val = val
        self.min = min
        self.next = next