import unittest
from solution import DetectSquares


class TestSolution(unittest.TestCase):
	def test_0(self):
		detectSquares = DetectSquares()
		detectSquares.add([3, 10])
		detectSquares.add([11, 2])
		detectSquares.add([3, 2])
		self.assertEqual(detectSquares.count([11, 10]),1)
		self.assertEqual(detectSquares.count([14, 8]),0)
		detectSquares.add([11, 2])
		self.assertEqual(detectSquares.count([11, 10]),2)


if __name__ == "__main__":
	unittest.main()