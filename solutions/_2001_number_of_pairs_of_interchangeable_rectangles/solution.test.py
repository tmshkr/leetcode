
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[[4,8],[3,6],[10,20],[15,30]]]
        expected = 6
        actual = s.interchangeableRectangles(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[[4,5],[7,8]]]
        expected = 0
        actual = s.interchangeableRectangles(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
