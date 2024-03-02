// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const a = head;
  const b = head.next;
  a.next = swapPairs(b.next);
  b.next = a;
  return b;
};

module.exports = { swapPairs, ListNode };

/*
https://leetcode.com/problems/swap-nodes-in-pairs/
*/
