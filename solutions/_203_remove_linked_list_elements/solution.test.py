import unittest
from solution import Solution, ListNode


def createList(arr):
    if len(arr) == 0:
        return None
    head = ListNode(arr[0])
    prev = head
    for i in range(1, len(arr)):
        prev.next = ListNode(arr[i])
        prev = prev.next
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
        head = createList([1, 2, 6, 3, 4, 5, 6])
        val = 6
        expected = [1, 2, 3, 4, 5]
        actual = s.removeElements(head, val)
        self.assertEqual(listToArray(actual), expected)

    def test_1(self):
        s = Solution()
        head = createList([])
        val = 1
        expected = []
        actual = s.removeElements(head, val)
        self.assertEqual(listToArray(actual), expected)

    def test_2(self):
        s = Solution()
        head = createList([7, 7, 7, 7])
        val = 7
        expected = []
        actual = s.removeElements(head, val)
        self.assertEqual(listToArray(actual), expected)


if __name__ == "__main__":
    unittest.main()
