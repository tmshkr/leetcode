function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0;
  let curr = head;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  const sizes = Array(k);
  for (let i = 0; i < k; i++) {
    sizes[i] = Math.floor(len / k);
  }
  for (let i = 0; i < len % k; i++) {
    sizes[i]++;
  }

  const result = Array(k);
  curr = head;
  for (let i = 0; i < k; i++) {
    if (sizes[i] === 0) {
      result[i] = null;
      continue;
    }
    result[i] = curr;
    for (let j = 1; j < sizes[i]; j++) {
      curr = curr.next;
    }
    const nxt = curr.next;
    curr.next = null;
    curr = nxt;
  }

  return result;
};

module.exports = { splitListToParts, ListNode };

/*
https://leetcode.com/problems/split-linked-list-in-parts/
*/
