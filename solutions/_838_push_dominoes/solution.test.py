import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["RR.L"]
        expected = "RR.L"
        actual = s.pushDominoes(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [".L.R...LR..L.."]
        expected = "LL.RR.LLRRLL.."
        actual = s.pushDominoes(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
