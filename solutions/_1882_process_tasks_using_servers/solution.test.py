
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[3,3,2],[1,2,3,2,1,2]]
        expected = [2,2,0,2,1,2]
        actual = s.assignTasks(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[5,1,4,3,2],[2,1,2,4,5,2,1]]
        expected = [1,4,1,4,1,3,2]
        actual = s.assignTasks(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
