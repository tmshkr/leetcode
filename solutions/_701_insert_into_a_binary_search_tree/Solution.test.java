package _701_insert_into_a_binary_search_tree;

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
  @DisplayName("[4,2,7,1,3],5")
  void insertIntoBST0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 4, 2, 7, 1, 3 });
    TreeNode actual = s.insertIntoBST(root, 5);
    Integer[] expected = new Integer[] { 4, 2, 7, 1, 3, 5 };
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[40,20,60,10,30,50,70],25")
  void insertIntoBST1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(
      new Integer[] { 40, 20, 60, 10, 30, 50, 70 }
    );
    TreeNode actual = s.insertIntoBST(root, 25);
    Integer[] expected = new Integer[] {
      40,
      20,
      60,
      10,
      30,
      50,
      70,
      null,
      null,
      25,
    };
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[4,2,7,1,3,null,null,null,null,null,null],5")
  void insertIntoBST2() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(
      new Integer[] { 4, 2, 7, 1, 3, null, null, null, null, null, null }
    );
    TreeNode actual = s.insertIntoBST(root, 5);
    Integer[] expected = new Integer[] { 4, 2, 7, 1, 3, 5 };
    assertArrayEquals(expected, converTreeToList(actual).toArray());
  }
}
