import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "ABCCED"), True)

    def test_1(self):
        self.assertEqual(s.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "SEE"), True)

    def test_2(self):
        self.assertEqual(s.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "ABCB"), False)


if __name__ == "__main__":
    unittest.main()
