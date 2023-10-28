import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.mergeTriplets(
            [[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]),  True)

    def test_1(self):
        self.assertEqual(s.mergeTriplets(
            [[3, 4, 5], [4, 5, 6]], [3, 2, 5]), False)

    def test_2(self):
        self.assertEqual(s.mergeTriplets(
            [[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5]), True)


if __name__ == "__main__":
    unittest.main()
