
package _1993_operations_on_tree;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  @Test
  @DisplayName("LockingTree")
  void LockingTreeTest() {
    LockingTree lockingTree = new LockingTree(new int[] { -1, 0, 0, 1, 1, 2, 2 });

    assertEquals(lockingTree.lock(2, 2), true);
    assertEquals(lockingTree.unlock(2, 3), false);
    assertEquals(lockingTree.unlock(2, 2), true);
    assertEquals(lockingTree.lock(4, 5), true);
    assertEquals(lockingTree.upgrade(0, 1), true);
    assertEquals(lockingTree.lock(0, 1), false);
  }
}