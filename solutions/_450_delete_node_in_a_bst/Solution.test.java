package _450_delete_node_in_a_bst;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private TreeNode createBinaryTree(Integer[] levelOrderList) {
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

  private static List<Integer> converTreeToList(TreeNode root) {
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

  @Test
  @DisplayName("[5,3,6,2,4,null,7],3")
  void deleteNode0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 5, 3, 6, 2, 4, null, 7 });
    TreeNode actual = s.deleteNode(root, 3);
    Integer[] expected = new Integer[] { 5, 4, 6, 2, null, null, 7 };
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[5,3,6,2,4,null,7],0")
  void deleteNode1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 5, 3, 6, 2, 4, null, 7 });
    TreeNode actual = s.deleteNode(root, 0);
    Integer[] expected = new Integer[] { 5, 3, 6, 2, 4, null, 7 };
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[],0")
  void deleteNode2() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] {});
    TreeNode actual = s.deleteNode(root, 0);
    Integer[] expected = new Integer[] {};
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }
}
