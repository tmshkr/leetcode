import unittest
from solution import Solution


def traverse(node):
    q = [node]
    res = []
    while q:
        node = q.pop(0)
        if node is None:
            res.append(None)
            continue
        res.append([int(node.isLeaf), int(node.val)])
        q.append(node.topLeft)
        q.append(node.topRight)
        q.append(node.bottomLeft)
        q.append(node.bottomRight)

    i = len(res) - 1
    while res[i] is None:
        res.pop(i)
        i -= 1

    return res


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[[0, 1], [1, 0]]]
        expected = [[0, 1], [1, 0], [1, 1], [1, 1], [1, 0]]
        actual = s.construct(*inputs)
        self.assertEqual(traverse(actual), expected)

    def test_1(self):
        s = Solution()
        inputs = [
            [
                [1, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 0, 0, 0],
            ]
        ]
        expected = [
            [0, 1],
            [1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            None,
            None,
            None,
            None,
            [1, 0],
            [1, 0],
            [1, 1],
            [1, 1],
        ]
        actual = s.construct(*inputs)
        self.assertEqual(traverse(actual), expected)


if __name__ == "__main__":
    unittest.main()
