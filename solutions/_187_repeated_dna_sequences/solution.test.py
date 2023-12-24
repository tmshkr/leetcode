import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"]
        expected = ["AAAAACCCCC", "CCCCCAAAAA"]
        actual = s.findRepeatedDnaSequences(*inputs)
        self.assertEqual(set(actual), set(expected))

    def test_1(self):
        s = Solution()
        inputs = ["AAAAAAAAAAAAA"]
        expected = ["AAAAAAAAAA"]
        actual = s.findRepeatedDnaSequences(*inputs)
        self.assertEqual(set(actual), set(expected))


if __name__ == "__main__":
    unittest.main()
