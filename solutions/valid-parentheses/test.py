import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.isValid("()"), True)

	def test_1(self):
		self.assertEqual(s.isValid("()[]{}"), True)

	def test_2(self):
		self.assertEqual(s.isValid("(]"), False)


if __name__ == "__main__":
	unittest.main()