import unittest
from solution import Solution, Node

s = Solution()


def createGraph(adjList):
    graph = []
    for i in range(len(adjList)):
        graph.append(Node(i+1))
    for i in range(len(adjList)):
        for j in adjList[i]:
            graph[i].neighbors.append(graph[j-1])
    return graph[0] if len(graph) > 0 else None


def compare(self, a, b):
    if a is None and b is None:
        return
    if a.visited and b.visited:
        return
    a.visited = True
    b.visited = True

    self.assertEqual(a.val, b.val)
    self.assertEqual(len(a.neighbors), len(b.neighbors))
    for i in range(len(a.neighbors)):
        compare(self, a.neighbors[i], b.neighbors[i])


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.cloneGraph(createGraph(
            [[2, 4], [1, 3], [2, 4], [1, 3]]
        ))
        compare(self, createGraph([[2, 4], [1, 3], [2, 4], [1, 3]]), res)

    def test_1(self):
        res = s.cloneGraph(createGraph([[]]))
        compare(self, createGraph([[]]), res)

    def test_2(self):
        res = s.cloneGraph(createGraph([]))
        compare(self, createGraph([]), res)


if __name__ == "__main__":
    unittest.main()
