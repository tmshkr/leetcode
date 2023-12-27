
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[-1,-2,-3,-4,3,2,1]]
        expected = 1
        actual = s.arraySign(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,5,0,2,-3]]
        expected = 0
        actual = s.arraySign(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[-1,1,-1,1,-1]]
        expected = -1
        actual = s.arraySign(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
