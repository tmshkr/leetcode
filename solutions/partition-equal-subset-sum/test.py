import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.canPartition([1, 5, 11, 5]), True)

    def test_1(self):
        self.assertEqual(s.canPartition([1, 2, 3, 5]), False)


if __name__ == "__main__":
    unittest.main()
