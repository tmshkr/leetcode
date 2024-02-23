
package _876_middle_of_the_linked_list;

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
  @DisplayName("[1,2,3,4,5]")
  void middleNode0() {
    Solution s = new Solution();
    // inputs = [1,2,3,4,5]
    // expected = 3,4,5
  }
  
  @Test
  @DisplayName("[1,2,3,4,5,6]")
  void middleNode1() {
    Solution s = new Solution();
    // inputs = [1,2,3,4,5,6]
    // expected = 4,5,6
  }
  
}