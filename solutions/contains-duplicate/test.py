import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.containsDuplicate([1, 2, 3, 1]), True)

    def test_1(self):
        self.assertEqual(s.containsDuplicate([1, 2, 3, 4]), False)

    def test_2(self):
        self.assertEqual(s.containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), True)


if __name__ == "__main__":
    unittest.main()
