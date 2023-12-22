
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[23,2,4,6,7],6]
        expected = True
        actual = s.checkSubarraySum(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[23,2,6,4,7],6]
        expected = True
        actual = s.checkSubarraySum(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[23,2,6,4,7],13]
        expected = False
        actual = s.checkSubarraySum(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
