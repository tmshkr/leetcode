import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.canJump([2, 3, 1, 1, 4]), True)

    def test_1(self):
        self.assertEqual(s.canJump([3, 2, 1, 0, 4]), False)


if __name__ == "__main__":
    unittest.main()
