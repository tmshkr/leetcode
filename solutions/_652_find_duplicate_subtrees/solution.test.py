import unittest
from solution import Solution, TreeNode


def create_binary_tree(level_order_list):
    if not level_order_list:
        return None

    root = TreeNode(level_order_list[0])
    queue = [root]
    index = 1

    while queue and index < len(level_order_list):
        node = queue.pop(0)

        left_val = level_order_list[index]
        if left_val is not None:
            node.left = TreeNode(left_val)
            queue.append(node.left)
        index += 1

        if index < len(level_order_list):
            right_val = level_order_list[index]
            if right_val is not None:
                node.right = TreeNode(right_val)
                queue.append(node.right)
            index += 1

    return root


def convert_tree_to_list(root):
    if not root:
        return []

    res = []
    q = [root]

    while q:
        node = q.pop(0)
        if node is None:
            res.append(None)
            continue
        res.append(node.val)
        q.append(node.left)
        q.append(node.right)

    while res and res[-1] is None:
        res.pop()

    return res


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, None, 2, 4, None, None, 4]]
        expected = [[2, 4], [4]]
        root = create_binary_tree(inputs[0])
        actual = sorted(
            [convert_tree_to_list(tree) for tree in s.findDuplicateSubtrees(root)]
        )
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[2, 1, 1]]
        expected = [[1]]
        root = create_binary_tree(inputs[0])
        actual = sorted(
            [convert_tree_to_list(tree) for tree in s.findDuplicateSubtrees(root)]
        )
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[2, 2, 2, 3, None, 3, None]]
        expected = [[2, 3], [3]]
        root = create_binary_tree(inputs[0])
        actual = sorted(
            [convert_tree_to_list(tree) for tree in s.findDuplicateSubtrees(root)]
        )
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
