import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.checkInclusion("ab","eidbaooo"), True)

	def test_1(self):
		self.assertEqual(s.checkInclusion("ab","eidboaoo"), False)


if __name__ == "__main__":
	unittest.main()