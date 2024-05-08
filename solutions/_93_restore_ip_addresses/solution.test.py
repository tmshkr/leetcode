import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["25525511135"]
        expected = ["255.255.11.135", "255.255.111.35"]
        actual = s.restoreIpAddresses(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["0000"]
        expected = ["0.0.0.0"]
        actual = s.restoreIpAddresses(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["101023"]
        expected = ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]
        actual = s.restoreIpAddresses(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
