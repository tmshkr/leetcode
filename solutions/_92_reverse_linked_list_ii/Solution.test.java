
package _92_reverse_linked_list_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.Assert.assertArrayEquals;

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

  private static int[] listToArray(ListNode head) {
    int len = 0;
    ListNode curr = head;
    while (curr != null) {
      len++;
      curr = curr.next;
    }
    int[] arr = new int[len];
    curr = head;
    for (int i = 0; i < len; i++) {
      arr[i] = curr.val;
      curr = curr.next;
    }
    return arr;
  }

  @Test
  @DisplayName("[1,2,3,4,5],2,4")
  void reverseBetween0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {1,2,3,4,5});
    int[] expected = new int[] {1,4,3,2,5};
    ListNode actual = s.reverseBetween(head, 2, 4);
    assertArrayEquals(expected, listToArray(actual));
  }
  
  @Test
  @DisplayName("[5],1,1")
  void reverseBetween1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {5});
    int[] expected = new int[] {5};
    ListNode actual = s.reverseBetween(head, 1, 1);
    assertArrayEquals(expected, listToArray(actual));
  }
  
}