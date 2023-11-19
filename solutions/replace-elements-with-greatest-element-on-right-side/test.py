import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.replaceElements([17,18,5,4,6,1]), [18,6,6,6,1,-1])

	def test_1(self):
		self.assertEqual(s.replaceElements([400]), [-1])


if __name__ == "__main__":
	unittest.main()