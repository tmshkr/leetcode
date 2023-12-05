class MyHashSet:
    def __init__(self):
        self.set = set()

    def add(self, key: int) -> None:
        self.set.add(key)

    def remove(self, key: int) -> None:
        if key in self.set:
            self.set.remove(key)

    def contains(self, key: int) -> bool:
        return key in self.set


# https://leetcode.com/problems/design-hashset/
