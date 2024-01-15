
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[2,2,2,2,5,5,5,8],3,4]
        expected = 3
        actual = s.numOfSubarrays(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[11,13,17,23,29,31,7,5,2,3],3,5]
        expected = 6
        actual = s.numOfSubarrays(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
