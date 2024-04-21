
package _951_flip_equivalent_binary_trees;

import static org.junit.jupiter.api.Assertions.assertEquals;
import __test_helpers__.binary_tree.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("[1,2,3,4,5,6,null,null,null,7,8],[1,3,2,null,6,4,5,null,null,null,null,8,7]")
  void flipEquiv0() {
    Solution s = new Solution();
    // inputs =
    // [1,2,3,4,5,6,null,null,null,7,8],[1,3,2,null,6,4,5,null,null,null,null,8,7]
    // expected = true
    TreeNode root1 = TestUtils.createBinaryTree(new Integer[] { 1, 2, 3, 4, 5, 6, null, null, null, 7, 8 });
    TreeNode root2 = TestUtils.createBinaryTree(new Integer[] { 1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7 });
    boolean expected = true;
    boolean actual = s.flipEquiv(root1, root2);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[],[]")
  void flipEquiv1() {
    Solution s = new Solution();
    // inputs = [],[]
    // expected = true
    TreeNode root1 = TestUtils.createBinaryTree(new Integer[] {});
    TreeNode root2 = TestUtils.createBinaryTree(new Integer[] {});
    boolean expected = true;
    boolean actual = s.flipEquiv(root1, root2);
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[],[1]")
  void flipEquiv2() {
    Solution s = new Solution();
    // inputs = [],[1]
    // expected = false
    TreeNode root1 = TestUtils.createBinaryTree(new Integer[] {});
    TreeNode root2 = TestUtils.createBinaryTree(new Integer[] { 1 });
    boolean expected = false;
    boolean actual = s.flipEquiv(root1, root2);
    assertEquals(expected, actual);
  }

}