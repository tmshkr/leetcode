
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,2,1],[2,2]]
        expected = [2]
        actual = s.intersection(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[4,9,5],[9,4,9,8,4]]
        expected = [9,4]
        actual = s.intersection(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
