import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.checkValidString("()"), True)

    def test_1(self):
        self.assertEqual(s.checkValidString("(*)"), True)

    def test_2(self):
        self.assertEqual(s.checkValidString("(*))"), True)


if __name__ == "__main__":
    unittest.main()
