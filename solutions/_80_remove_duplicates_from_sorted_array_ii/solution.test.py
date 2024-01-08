import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        nums = [1, 1, 1, 2, 2, 3]
        expected = [1, 1, 2, 2, 3, None]
        k = s.removeDuplicates(nums)
        self.assertEqual(k, 5)
        self.assertEqual(nums[:k], expected[:k])

    def test_1(self):
        s = Solution()
        nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
        expected = [0, 0, 1, 1, 2, 3, 3, None, None]
        k = s.removeDuplicates(nums)
        self.assertEqual(k, 7)
        self.assertEqual(nums[:k], expected[:k])


if __name__ == "__main__":
    unittest.main()
