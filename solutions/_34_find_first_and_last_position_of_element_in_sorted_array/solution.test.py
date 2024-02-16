
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[5,7,7,8,8,10],8]
        expected = [3,4]
        actual = s.searchRange(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[5,7,7,8,8,10],6]
        expected = [-1,-1]
        actual = s.searchRange(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[],0]
        expected = [-1,-1]
        actual = s.searchRange(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
