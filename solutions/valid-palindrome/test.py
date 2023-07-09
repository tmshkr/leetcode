import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.isPalindrome("A man, a plan, a canal: Panama"), True)

	def test_1(self):
		self.assertEqual(s.isPalindrome("race a car"), False)

	def test_2(self):
		self.assertEqual(s.isPalindrome(" "), True)


if __name__ == "__main__":
	unittest.main()