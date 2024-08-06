
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[5,6,2,7,4]]
        expected = 34
        actual = s.maxProductDifference(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[4,2,5,9,7,4,8]]
        expected = 64
        actual = s.maxProductDifference(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
