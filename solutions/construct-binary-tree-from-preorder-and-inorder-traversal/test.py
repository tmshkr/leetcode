import unittest
from code import Solution, TreeNode

s = Solution()


def level_order_traversal(root):
    if root is None:
        return []

    result = []
    queue = [root]

    while queue:
        current_node = queue.pop(0)  # Dequeue the front node
        result.append(current_node.val if current_node else None)

        if current_node:
            queue.append(current_node.left)
            queue.append(current_node.right)

    for i in range(len(result)-1, -1, -1):
        if (result[i]):
            break

        result.pop()

    return result


class TestSolution(unittest.TestCase):
    def test_0(self):
        root = s.buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
        res = level_order_traversal(root)
        spec = [3, 9, 20, None, None, 15, 7]

        self.assertEqual(res, spec)

    def test_1(self):
        root = s.buildTree([-1], [-1])
        res = level_order_traversal(root)
        spec = [-1]

        self.assertEqual(res, spec)


if __name__ == "__main__":
    unittest.main()
