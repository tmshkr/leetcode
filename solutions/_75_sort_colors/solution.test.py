import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        arr = [2, 0, 2, 1, 1, 0]
        expected = [0, 0, 1, 1, 2, 2]
        s.sortColors(arr)
        self.assertEqual(arr, expected)

    def test_1(self):
        s = Solution()
        arr = [2, 0, 1]
        expected = [0, 1, 2]
        s.sortColors(arr)
        self.assertEqual(arr, expected)


if __name__ == "__main__":
    unittest.main()
