
package _617_merge_two_binary_trees;

import static org.junit.Assert.assertArrayEquals;
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
  @DisplayName("[1,3,2,5],[2,1,3,null,4,null,7]")
  void mergeTrees0() {
    Solution s = new Solution();
    TreeNode treeA = createBinaryTree(new Integer[] { 1, 3, 2, 5 });
    TreeNode treeB = createBinaryTree(new Integer[] { 2, 1, 3, null, 4, null, 7 });
    Integer[] expected = new Integer[] { 3, 4, 5, 5, 4, null, 7 };
    TreeNode actual = s.mergeTrees(treeA, treeB);
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[1],[1,2]")
  void mergeTrees1() {
    Solution s = new Solution();
    TreeNode treeA = createBinaryTree(new Integer[] { 1 });
    TreeNode treeB = createBinaryTree(new Integer[] { 1, 2 });
    Integer[] expected = new Integer[] { 2, 2 };
    TreeNode actual = s.mergeTrees(treeA, treeB);
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

}