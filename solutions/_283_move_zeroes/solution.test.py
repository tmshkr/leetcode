import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        nums = [0, 1, 0, 3, 12]
        expected = [1, 3, 12, 0, 0]
        s.moveZeroes(nums)
        self.assertEqual(nums, expected)

    def test_1(self):
        s = Solution()
        nums = [0]
        expected = [0]
        s.moveZeroes(nums)
        self.assertEqual(nums, expected)


if __name__ == "__main__":
    unittest.main()
