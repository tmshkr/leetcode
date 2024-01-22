
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,1,4,2,3],5]
        expected = 2
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[5,6,7,8,9],4]
        expected = -1
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[3,2,20,1,1,3],10]
        expected = 5
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
