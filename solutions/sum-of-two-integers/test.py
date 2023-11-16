import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.getSum(1, 2), 3)

    def test_1(self):
        self.assertEqual(s.getSum(2, 3), 5)

    def test_2(self):
        self.assertEqual(s.getSum(-3, 2), -1)

    def test_2(self):
        self.assertEqual(s.getSum(-1, 1), 0)


if __name__ == "__main__":
    unittest.main()
