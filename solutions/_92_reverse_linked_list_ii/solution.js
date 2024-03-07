function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left == right) return head;

  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    const tmp = curr.next;
    curr.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  return dummy.next;
};

module.exports = { reverseBetween, ListNode };

/*
https://leetcode.com/problems/reverse-linked-list-ii/
*/
