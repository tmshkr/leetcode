import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.generateParenthesis(3), ["((()))","(()())","(())()","()(())","()()()"])

	def test_1(self):
		self.assertEqual(s.generateParenthesis(1), ["()"])


if __name__ == "__main__":
	unittest.main()