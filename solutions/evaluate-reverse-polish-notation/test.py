import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.evalRPN(["2","1","+","3","*"]), 9)

	def test_1(self):
		self.assertEqual(s.evalRPN(["4","13","5","/","+"]), 6)

	def test_2(self):
		self.assertEqual(s.evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]), 22)


if __name__ == "__main__":
	unittest.main()