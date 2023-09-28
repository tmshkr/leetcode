import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.swimInWater([[0, 2], [1, 3]]), 3)

    def test_1(self):
        self.assertEqual(s.swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [
                         12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]), 16)

    def test_2(self):
        self.assertEqual(s.swimInWater([[3, 2], [0, 1]]), 3)


if __name__ == "__main__":
    unittest.main()
