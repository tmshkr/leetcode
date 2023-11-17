import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.reverse(123), 321)

	def test_1(self):
		self.assertEqual(s.reverse(-123), -321)

	def test_2(self):
		self.assertEqual(s.reverse(120), 21)


if __name__ == "__main__":
	unittest.main()