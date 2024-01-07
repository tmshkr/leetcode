import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        nums = [1, 1, 2]
        expected = [1, 2, None]
        k = s.removeDuplicates(nums)
        self.assertEqual(nums[:k], expected[:k])

    def test_1(self):
        s = Solution()
        nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        expected = [0, 1, 2, 3, 4, None, None, None, None, None]
        k = s.removeDuplicates(nums)
        self.assertEqual(nums[:k], expected[:k])


if __name__ == "__main__":
    unittest.main()
