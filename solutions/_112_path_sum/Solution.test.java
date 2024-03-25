
package _112_path_sum;

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
  @DisplayName("[5,4,8,11,null,13,4,7,2,null,null,null,1],22")
  void hasPathSum0() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] { 5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1 };
    TreeNode root = createBinaryTree(levelOrderList);
    int targetSum = 22;
    boolean expected = true;
    boolean actual = s.hasPathSum(root, targetSum);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,2,3],5")
  void hasPathSum1() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] { 1, 2, 3 };
    TreeNode root = createBinaryTree(levelOrderList);
    int targetSum = 5;
    boolean expected = false;
    boolean actual = s.hasPathSum(root, targetSum);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[],0")
  void hasPathSum2() {
    Solution s = new Solution();
    Integer[] levelOrderList = new Integer[] {};
    TreeNode root = createBinaryTree(levelOrderList);
    int targetSum = 0;
    boolean expected = false;
    boolean actual = s.hasPathSum(root, targetSum);
    assertEquals(expected, actual);
  }

}