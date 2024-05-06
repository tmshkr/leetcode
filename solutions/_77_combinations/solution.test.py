
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [4,2]
        expected = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
        actual = s.combine(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [1,1]
        expected = [[1]]
        actual = s.combine(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
