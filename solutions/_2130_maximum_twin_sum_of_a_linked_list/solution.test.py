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


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        actual = s.pairSum(createList([5, 4, 2, 1]))
        expected = 6
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        actual = s.pairSum(createList([4, 2, 2, 3]))
        expected = 7
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        actual = s.pairSum(createList([1, 100000]))
        expected = 100001
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
