
package _662_maximum_width_of_binary_tree;

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
  @DisplayName("[1,3,2,5,3,null,9]")
  void widthOfBinaryTree0() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] { 1, 3, 2, 5, 3, null, 9 };
    TreeNode root = createBinaryTree(levelOrderList);
    int expected = 4;
    int actual = s.widthOfBinaryTree(root);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,3,2,5,null,null,9,6,null,7]")
  void widthOfBinaryTree1() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] { 1, 3, 2, 5, null, null, 9, 6, null, 7 };
    TreeNode root = createBinaryTree(levelOrderList);
    int expected = 7;
    int actual = s.widthOfBinaryTree(root);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,3,2,5]")
  void widthOfBinaryTree2() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] { 1, 3, 2, 5 };
    TreeNode root = createBinaryTree(levelOrderList);
    int expected = 2;
    int actual = s.widthOfBinaryTree(root);
    assertEquals(expected, actual);
  }

}