import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.findItinerary([["MUC", "LHR"], ["JFK", "MUC"], [
                         "SFO", "SJC"], ["LHR", "SFO"]]), ["JFK", "MUC", "LHR", "SFO", "SJC"])

    def test_1(self):
        self.assertEqual(s.findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], [
                         "ATL", "JFK"], ["ATL", "SFO"]]), ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"])


if __name__ == "__main__":
    unittest.main()
