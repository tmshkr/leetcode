import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.change(5,[1,2,5]), 4)

	def test_1(self):
		self.assertEqual(s.change(3,[2]), 0)

	def test_2(self):
		self.assertEqual(s.change(10,[10]), 1)


if __name__ == "__main__":
	unittest.main()