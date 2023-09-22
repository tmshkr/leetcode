import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.findOrder(2, [[1, 0]]), [0, 1])

    def test_1(self):
        self.assertEqual(s.findOrder(
            4, [[1, 0], [2, 0], [3, 1], [3, 2]]), [0, 1, 2, 3])

    def test_2(self):
        self.assertEqual(s.findOrder(1, []), [0])

    def test_3(self):
        self.assertEqual(s.findOrder(
            6, [[0, 1], [0, 2], [1, 3], [3, 2], [4, 0], [5, 0]]), [2, 3, 1, 0, 4, 5])


if __name__ == "__main__":
    unittest.main()
