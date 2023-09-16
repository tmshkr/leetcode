function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const arr = [];
  let curr = head;
  let i = 0;

  while (curr) {
    const copy = new Node(curr.val);
    if (i > 0) {
      arr[i - 1].next = copy;
    }
    arr.push(copy);
    curr.index = i;
    curr = curr.next;
    i++;
  }

  curr = head;
  i = 0;
  while (curr) {
    if (curr.random) {
      arr[i].random = arr[curr.random.index];
    }
    curr = curr.next;
    i++;
  }
  return arr[0];
};

module.exports = { copyRandomList, Node };

/*
https://leetcode.com/problems/copy-list-with-random-pointer/
*/
