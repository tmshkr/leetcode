
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["0100"]
        expected = 1
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["10"]
        expected = 0
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = ["1111"]
        expected = 2
        actual = s.minOperations(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
