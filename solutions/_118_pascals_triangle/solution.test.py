
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [5]
        expected = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
        actual = s.generate(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [1]
        expected = [[1]]
        actual = s.generate(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
