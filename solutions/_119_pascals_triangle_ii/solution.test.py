
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [3]
        expected = [1,3,3,1]
        actual = s.getRow(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [0]
        expected = [1]
        actual = s.getRow(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [1]
        expected = [1,1]
        actual = s.getRow(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
