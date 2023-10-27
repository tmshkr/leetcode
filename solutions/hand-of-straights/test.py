import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.isNStraightHand(
            [1, 2, 3, 6, 2, 3, 4, 7, 8], 3), True)

    def test_1(self):
        self.assertEqual(s.isNStraightHand([1, 2, 3, 4, 5], 4), False)


if __name__ == "__main__":
    unittest.main()
