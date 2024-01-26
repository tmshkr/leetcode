
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,3,4,5],[4,5,3,2,1]]
        expected = True
        actual = s.validateStackSequences(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,2,3,4,5],[4,3,5,1,2]]
        expected = False
        actual = s.validateStackSequences(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
