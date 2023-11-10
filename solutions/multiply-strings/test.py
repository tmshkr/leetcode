import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.multiply("2","3"), "6")

	def test_1(self):
		self.assertEqual(s.multiply("123","456"), "56088")


if __name__ == "__main__":
	unittest.main()