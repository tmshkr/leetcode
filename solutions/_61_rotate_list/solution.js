function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let length = 1;
  let curr = head;
  while (curr.next) {
    curr = curr.next;
    length++;
  }
  k = k % length;
  if (k === 0) {
    return head;
  }

  curr.next = head;
  for (let i = 0; i < length - k; i++) {
    curr = curr.next;
  }

  const newHead = curr.next;
  curr.next = null;

  return newHead;
};

module.exports = { rotateRight, ListNode };

/*
https://leetcode.com/problems/rotate-list/
*/
