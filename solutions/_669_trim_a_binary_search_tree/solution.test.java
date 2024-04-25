
package _669_trim_a_binary_search_tree;

import static org.junit.Assert.assertArrayEquals;
import test_helpers.binary_tree.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,0,2],1,2")
  void trimBST0() {
    Solution s = new Solution();
    TreeNode root = TestUtils.createBinaryTree(new Integer[] { 1, 0, 2 });
    int low = 1;
    int high = 2;
    Integer[] expected = { 1, null, 2 };
    TreeNode actual = s.trimBST(root, low, high);
    assertArrayEquals(expected, TestUtils.converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[3,0,4,null,2,null,null,1],1,3")
  void trimBST1() {
    Solution s = new Solution();
    TreeNode root = TestUtils.createBinaryTree(new Integer[] { 3, 0, 4, null, 2, null, null, 1 });
    int low = 1;
    int high = 3;
    Integer[] expected = { 3, 2, null, 1 };
    TreeNode actual = s.trimBST(root, low, high);
    assertArrayEquals(expected, TestUtils.converTreeToList(actual).toArray());
  }

}