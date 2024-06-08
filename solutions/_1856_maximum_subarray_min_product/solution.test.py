
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,3,2]]
        expected = 14
        actual = s.maxSumMinProduct(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[2,3,3,1,2]]
        expected = 18
        actual = s.maxSumMinProduct(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[3,1,5,6,4,2]]
        expected = 60
        actual = s.maxSumMinProduct(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
