import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["anagram", "nagaram"]
        expected = True
        actual = s.isAnagram(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["rat", "car"]
        expected = False
        actual = s.isAnagram(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
