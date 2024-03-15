
package _144_binary_tree_preorder_traversal;

import static org.junit.Assert.assertArrayEquals;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

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
  @DisplayName("[1,null,2,3]")
  void preorderTraversal0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] {1, null, 2, 3});
    List<Integer> expected = new ArrayList<Integer>();
    expected.add(1);
    expected.add(2);
    expected.add(3);
    assertArrayEquals(expected.toArray(), s.preorderTraversal(root).toArray());
  }
  
  @Test
  @DisplayName("[]")
  void preorderTraversal1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] {});
    List<Integer> expected = new ArrayList<Integer>();
    assertArrayEquals(expected.toArray(), s.preorderTraversal(root).toArray());
  }
  
  @Test
  @DisplayName("[1]")
  void preorderTraversal2() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] {1});
    List<Integer> expected = new ArrayList<Integer>();
    expected.add(1);
    assertArrayEquals(expected.toArray(), s.preorderTraversal(root).toArray());
  } 
}