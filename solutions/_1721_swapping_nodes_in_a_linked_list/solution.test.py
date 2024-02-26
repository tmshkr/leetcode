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
        actual = s.swapNodes(createList([1, 2, 3, 4, 5]), 2)
        expected = [1, 4, 3, 2, 5]
        self.assertEqual(listToArray(actual), expected)

    def test_1(self):
        s = Solution()
        actual = s.swapNodes(createList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]), 5)
        expected = [7, 9, 6, 6, 8, 7, 3, 0, 9, 5]
        self.assertEqual(listToArray(actual), expected)


if __name__ == "__main__":
    unittest.main()
