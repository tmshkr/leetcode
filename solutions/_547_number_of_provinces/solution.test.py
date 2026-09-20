import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
        expected = 2
        actual = s.findCircleNum(isConnected)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        expected = 3
        actual = s.findCircleNum(isConnected)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
