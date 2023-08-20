import unittest
from code import Solution, TreeNode

s = Solution()


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


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.rightSideView(create_binary_tree([1, 2, 3, None, 5, None, 4]))
        spec = [1, 3, 4]

        self.assertEqual(len(res), len(spec))
        for i in range(len(spec)):
            self.assertEqual(res[i], spec[i])

    def test_1(self):
        res = s.rightSideView(create_binary_tree([1, None, 3]))
        spec = [1, 3]

        self.assertEqual(len(res), len(spec))
        for i in range(len(spec)):
            self.assertEqual(res[i], spec[i])

    def test_2(self):
        self.assertEqual(s.rightSideView([]), [])

        res = s.rightSideView(create_binary_tree([]))
        spec = []

        self.assertEqual(len(res), len(spec))


if __name__ == "__main__":
    unittest.main()
