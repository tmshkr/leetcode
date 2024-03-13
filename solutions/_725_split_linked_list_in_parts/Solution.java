
package _725_split_linked_list_in_parts;

class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        int len = 0;
        ListNode curr = head;
        while (curr != null) {
            len++;
            curr = curr.next;
        }
        int[] sizes = new int[k];
        for (int i = 0; i < k; i++) {
            sizes[i] = len / k;
        }
        for (int i = 0; i < len % k; i++) {
            sizes[i]++;
        }
        ListNode[] result = new ListNode[k];
        curr = head;
        for (int i = 0; i < k; i++) {
            if (sizes[i] == 0) {
                result[i] = null;
                continue;
            }
            result[i] = curr;
            for (int j = 1; j < sizes[i]; j++) {
                curr = curr.next;
            }
            ListNode next = curr.next;
            curr.next = null;
            curr = next;
        }
        return result;

    }
}

/*
 * https://leetcode.com/problems/split-linked-list-in-parts/
 */
