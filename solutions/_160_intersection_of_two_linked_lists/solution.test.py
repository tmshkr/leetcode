import unittest
from solution import Solution, ListNode


def createList(arr):
    if len(arr) == 0:
        return None
    head = ListNode(arr[0])
    curr = head
    for i in range(1, len(arr)):
        curr.next = ListNode(arr[i])
        curr = curr.next
    return head


def joinLists(listA, listB, skipA, skipB):
    currA, currB = listA, listB
    for _ in range(skipA - 1):
        currA = currA.next
    for _ in range(skipB):
        currB = currB.next
    if currB:
        currA.next = currB


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        listA = createList([4, 1, 8, 4, 5])
        listB = createList([5, 6, 1, 8, 4, 5])
        joinLists(listA, listB, 2, 3)
        actual = s.getIntersectionNode(listA, listB)
        self.assertEqual(actual.val, 8)

    def test_1(self):
        s = Solution()
        listA = createList([1, 9, 1, 2, 4])
        listB = createList([3, 2, 4])
        joinLists(listA, listB, 3, 1)
        actual = s.getIntersectionNode(listA, listB)
        self.assertEqual(actual.val, 2)

    def test_2(self):
        s = Solution()
        listA = createList([2, 6, 4])
        listB = createList([1, 5])
        joinLists(listA, listB, 3, 2)
        actual = s.getIntersectionNode(listA, listB)
        self.assertEqual(actual, None)


if __name__ == "__main__":
    unittest.main()
