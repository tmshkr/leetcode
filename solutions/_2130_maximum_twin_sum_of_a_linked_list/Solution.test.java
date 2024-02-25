
package _2130_maximum_twin_sum_of_a_linked_list;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  private static ListNode createList(int[] arr) {
    if (arr.length == 0) {
      return null;
    }
    ListNode head = new ListNode(arr[0]);
    ListNode curr = head;
    for (int i = 1; i < arr.length; i++) {
      curr.next = new ListNode(arr[i]);
      curr = curr.next;
    }
    return head;
  }

  @Test
  @DisplayName("[5,4,2,1]")
  void pairSum0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 5, 4, 2, 1 });
    int actual = s.pairSum(head);
    int expected = 6;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[4,2,2,3]")
  void pairSum1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 4, 2, 2, 3 });
    int actual = s.pairSum(head);
    int expected = 7;
    assertEquals(expected, actual);
  }

  @Test
  @DisplayName("[1,100000]")
  void pairSum2() {
    Solution s = new Solution();
    ListNode head = createList(new int[] { 1, 100000 });
    int actual = s.pairSum(head);
    int expected = 100001;
    assertEquals(expected, actual);
  }

}