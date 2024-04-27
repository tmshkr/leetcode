
package _538_convert_bst_to_greater_tree;

import static org.junit.Assert.assertArrayEquals;
import test_helpers.binary_tree.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]")
  void convertBST0() {
    Solution s = new Solution();
    TreeNode root = TestUtils
        .createBinaryTree(new Integer[] { 4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8 });
    Integer[] expected = new Integer[] { 30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8 };
    TreeNode actual = s.convertBST(root);
    assertArrayEquals(expected, TestUtils.converTreeToList(actual).toArray());
  }

  @Test
  @DisplayName("[0,null,1]")
  void convertBST1() {
    Solution s = new Solution();
    TreeNode root = TestUtils.createBinaryTree(new Integer[] { 0, null, 1 });
    Integer[] expected = new Integer[] { 1, null, 1 };
    TreeNode actual = s.convertBST(root);
    assertArrayEquals(expected, TestUtils.converTreeToList(actual).toArray());
  }

}