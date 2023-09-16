import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.isAnagram("anagram","nagaram"), True)

	def test_1(self):
		self.assertEqual(s.isAnagram("rat","car"), False)


if __name__ == "__main__":
	unittest.main()