
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[-1,0,1,2,-1,-4]]
        expected = [[-1,-1,2],[-1,0,1]]
        actual = s.threeSum(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[0,1,1]]
        expected = []
        actual = s.threeSum(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[0,0,0]]
        expected = [[0,0,0]]
        actual = s.threeSum(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
