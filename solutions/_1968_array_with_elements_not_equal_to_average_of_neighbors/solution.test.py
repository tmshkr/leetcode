import unittest
from solution import Solution


def check(nums):
    for i in range(1, len(nums) - 1):
        if (nums[i - 1] + nums[i + 1]) / 2 == nums[i]:
            return False
    return True


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, 5]]
        actual = s.rearrangeArray(*inputs)
        self.assertEqual(check(actual), True)

    def test_1(self):
        s = Solution()
        inputs = [[6, 2, 0, 9, 7]]
        actual = s.rearrangeArray(*inputs)
        self.assertEqual(check(actual), True)


if __name__ == "__main__":
    unittest.main()
