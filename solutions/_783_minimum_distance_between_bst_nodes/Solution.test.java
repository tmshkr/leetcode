package _783_minimum_distance_between_bst_nodes;

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
  @DisplayName("[4,2,6,1,3]")
  void minDiffInBST0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 4, 2, 6, 1, 3 });
    int expected = 1;
    int actual = s.minDiffInBST(root);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,0,48,null,null,12,49]")
  void minDiffInBST1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(
      new Integer[] { 1, 0, 48, null, null, 12, 49 }
    );
    int expected = 1;
    int actual = s.minDiffInBST(root);
    assertEquals(expected, actual);
  }
}
