class Node:
    def __init__(self, key, val, next):
        self.key = key
        self.val = val
        self.next = next


class MyHashMap:
    size = 19997
    mult = 12582917

    def __init__(self):
        self.map = [None] * self.size

    def hash(self, key):
        return (key * self.mult) % self.size

    def put(self, key: int, value: int) -> None:
        self.remove(key)
        h = self.hash(key)
        node = Node(key, value, self.map[h])
        self.map[h] = node

    def get(self, key: int) -> int:
        h = self.hash(key)
        node = self.map[h]
        while node is not None:
            if node.key == key:
                return node.val
            node = node.next
        return -1

    def remove(self, key: int) -> None:
        h = self.hash(key)
        node = self.map[h]
        if node is None:
            return
        if node.key == key:
            self.map[h] = node.next
        else:
            while node.next is not None:
                if node.next.key == key:
                    node.next = node.next.next
                    return
                node = node.next


# https://leetcode.com/problems/design-hashmap/
