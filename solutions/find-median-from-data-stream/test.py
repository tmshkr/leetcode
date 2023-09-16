import unittest
from solution import MedianFinder


class TestSolution(unittest.TestCase):
    def test_0(self):
        medianFinder = MedianFinder()
        medianFinder.addNum(1)    # arr = [1]
        medianFinder.addNum(2)    # arr = [1, 2]
        # return 1.5 (i.e., (1 + 2) / 2)
        self.assertEqual(medianFinder.findMedian(), 1.5)
        medianFinder.addNum(3)    # arr[1, 2, 3]
        self.assertEqual(medianFinder.findMedian(), 2.0)  # return 2.0


if __name__ == "__main__":
    unittest.main()
