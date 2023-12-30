
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,3,0,0,2,0,0,4]]
        expected = 6
        actual = s.zeroFilledSubarray(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[0,0,0,2,0,0]]
        expected = 9
        actual = s.zeroFilledSubarray(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[2,10,2019]]
        expected = 0
        actual = s.zeroFilledSubarray(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
