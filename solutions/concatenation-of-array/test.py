import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.getConcatenation([1,2,1]), [1,2,1,1,2,1])

	def test_1(self):
		self.assertEqual(s.getConcatenation([1,3,2,1]), [1,3,2,1,1,3,2,1])


if __name__ == "__main__":
	unittest.main()