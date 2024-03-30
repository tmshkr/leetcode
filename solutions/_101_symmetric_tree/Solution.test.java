package _101_symmetric_tree;

import static org.junit.jupiter.api.Assertions.assertEquals;

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

  @Test
  @DisplayName("[1,2,2,3,4,4,3]")
  void isSymmetric0() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 1, 2, 2, 3, 4, 4, 3 };
    TreeNode root = createBinaryTree(levelOrderList);
    boolean actual = s.isSymmetric(root);
    boolean expected = true;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,2,null,3,null,3]")
  void isSymmetric1() {
    Solution s = new Solution();
    Integer[] levelOrderList = { 1, 2, 2, null, 3, null, 3 };
    TreeNode root = createBinaryTree(levelOrderList);
    boolean actual = s.isSymmetric(root);
    boolean expected = false;
    assertEquals(expected, actual);
  }
}
