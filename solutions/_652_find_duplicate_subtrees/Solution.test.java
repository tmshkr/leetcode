
package _652_find_duplicate_subtrees;

import static org.junit.Assert.assertEquals;
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
  @DisplayName("[1,2,3,4,null,2,4,null,null,4]")
  void findDuplicateSubtrees0() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 1, 2, 3, 4, null, 2, 4, null, null, 4 });
    Integer[][] expected = new Integer[][] { { 2, 4 }, { 4 } };
    List<TreeNode> actual = s.findDuplicateSubtrees(root);
    List<List<Integer>> res = new ArrayList<>();
    for (TreeNode node : actual) {
      res.add(converTreeToList(node));
    }

    res.sort(Comparator.comparingInt(a -> a.get(0)));
    assertEquals(expected.length, res.size());
    for (int i = 0; i < expected.length; i++) {
      assertArrayEquals(expected[i], res.get(i).toArray());
    }
  }

  @Test
  @DisplayName("[2,1,1]")
  void findDuplicateSubtrees1() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 2, 1, 1 });
    Integer[][] expected = new Integer[][] { { 1 } };
    List<TreeNode> actual = s.findDuplicateSubtrees(root);
    List<List<Integer>> res = new ArrayList<>();
    for (TreeNode node : actual) {
      res.add(converTreeToList(node));
    }

    res.sort(Comparator.comparingInt(a -> a.get(0)));
    assertEquals(expected.length, res.size());
    for (int i = 0; i < expected.length; i++) {
      assertArrayEquals(expected[i], res.get(i).toArray());
    }
  }

  @Test
  @DisplayName("[2,2,2,3,null,3,null]")
  void findDuplicateSubtrees2() {
    Solution s = new Solution();
    TreeNode root = createBinaryTree(new Integer[] { 2, 2, 2, 3, null, 3, null });
    Integer[][] expected = new Integer[][] { { 2, 3 }, { 3 } };
    List<TreeNode> actual = s.findDuplicateSubtrees(root);
    List<List<Integer>> res = new ArrayList<>();
    for (TreeNode node : actual) {
      res.add(converTreeToList(node));
    }

    res.sort(Comparator.comparingInt(a -> a.get(0)));
    assertEquals(expected.length, res.size());
    for (int i = 0; i < expected.length; i++) {
      assertArrayEquals(expected[i], res.get(i).toArray());
    }
  }

}