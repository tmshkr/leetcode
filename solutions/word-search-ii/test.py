import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], [
            "i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"])
        self.assertEqual(set(res), set(["eat", "oath"]))

    def test_1(self):
        res = s.findWords([["a", "b"], ["c", "d"]], ["abcb"])
        self.assertEqual(set(res), set([]))


if __name__ == "__main__":
    unittest.main()
