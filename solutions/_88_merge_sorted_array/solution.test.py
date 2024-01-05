import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        nums1 = [1, 2, 3, 0, 0, 0]
        m = 3
        nums2 = [2, 5, 6]
        n = 3
        expected = [1, 2, 2, 3, 5, 6]

        s.merge(nums1, m, nums2, n)
        self.assertEqual(nums1, expected)

    def test_1(self):
        s = Solution()
        nums1 = [1]
        m = 1
        nums2 = []
        n = 0
        expected = [1]

        s.merge(nums1, m, nums2, n)
        self.assertEqual(nums1, expected)

    def test_2(self):
        s = Solution()
        inputs = [[0], 0, [1], 1]
        nums1 = [0]
        m = 0
        nums2 = [1]
        n = 1
        expected = [1]

        s.merge(nums1, m, nums2, n)
        self.assertEqual(nums1, expected)


if __name__ == "__main__":
    unittest.main()
