
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[3,5,6,7],9]
        expected = 4
        actual = s.numSubseq(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[3,3,6,8],10]
        expected = 6
        actual = s.numSubseq(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[2,3,3,4,6,7],12]
        expected = 61
        actual = s.numSubseq(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
