
package _61_rotate_list;

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
  @DisplayName("[1,2,3,4,5],2")
  void rotateRight0() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {1,2,3,4,5});
    int[] expected = new int[] {4,5,1,2,3};
    ListNode actual = s.rotateRight(head, 2);
    assertArrayEquals(expected, listToArray(actual));
  }
  
  @Test
  @DisplayName("[0,1,2],4")
  void rotateRight1() {
    Solution s = new Solution();
    ListNode head = createList(new int[] {0,1,2});
    int[] expected = new int[] {2,0,1};
    ListNode actual = s.rotateRight(head, 4);
    assertArrayEquals(expected, listToArray(actual));
  }
  
}