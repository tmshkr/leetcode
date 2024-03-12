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


def listToArray(head):
    arr = []
    while head:
        arr.append(head.val)
        head = head.next
    return arr


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        actual = s.insertionSortList(createList([4, 2, 1, 3]))
        expected = [1, 2, 3, 4]
        self.assertEqual(listToArray(actual), expected)

    def test_1(self):
        s = Solution()
        actual = s.insertionSortList(createList([-1, 5, 3, 4, 0]))
        expected = [-1, 0, 3, 4, 5]
        self.assertEqual(listToArray(actual), expected)


if __name__ == "__main__":
    unittest.main()
