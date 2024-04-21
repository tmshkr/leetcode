package __test_helpers__.binary_tree;

import java.util.*;

public class TestUtils {
    public static List<Integer> converTreeToList(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) {
            return res;
        }

        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            if (node != null) {
                res.add(node.val);
                q.add(node.left);
                q.add(node.right);
            } else {
                res.add(null);
            }
        }

        while (res.get(res.size() - 1) == null) {
            res.remove(res.size() - 1);
        }

        return res;
    }

    public static TreeNode createBinaryTree(Integer[] levelOrderList) {
        if (levelOrderList.length == 0) {
            return null;
        }
        TreeNode root = new TreeNode(levelOrderList[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int idx = 1;

        while (!q.isEmpty() && idx < levelOrderList.length) {
            TreeNode node = q.poll();
            Integer leftVal = levelOrderList[idx];
            if (leftVal != null) {
                node.left = new TreeNode(leftVal);
                q.add(node.left);
            }
            idx++;

            if (idx < levelOrderList.length) {
                Integer rightVal = levelOrderList[idx];
                if (rightVal != null) {
                    node.right = new TreeNode(levelOrderList[idx]);
                    q.add(node.right);
                }
                idx++;
            }
        }

        return root;
    }
}
