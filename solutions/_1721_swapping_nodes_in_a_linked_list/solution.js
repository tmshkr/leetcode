// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let cur = head;
  for (let i = 1; i < k; i++) {
    cur = cur.next;
  }
  let left = cur;

  // cur is at position k, so head is k nodes behind cur
  let right = head;
  while (cur.next) {
    cur = cur.next;
    right = right.next;
  }

  [left.val, right.val] = [right.val, left.val];
  return head;
};

module.exports = { swapNodes, ListNode };

/*
https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
*/
