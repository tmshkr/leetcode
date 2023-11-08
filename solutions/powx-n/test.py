import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.myPow(2.00000,10), 1024.00000)

	def test_1(self):
		self.assertEqual(s.myPow(2.10000,3), 9.26100)

	def test_2(self):
		self.assertEqual(s.myPow(2.00000,-2), 0.25000)


if __name__ == "__main__":
	unittest.main()