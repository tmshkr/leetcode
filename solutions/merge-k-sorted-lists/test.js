const { mergeKLists, ListNode } = require("./solution.js");

function createList(l) {
  if (l.length === 0) {
    return null;
  }

  const head = new ListNode(l[0]);
  let prev = head;

  for (let i = 1; i < l.length; i++) {
    prev.next = new ListNode(l[i]);
    prev = prev.next;
  }

  return head;
}

function checkList(head, l) {
  let curr = head;
  let i = 0;

  while (curr) {
    expect(curr.val).toEqual(l[i]);
    i++;
    curr = curr.next;
  }
}

test(`[[1,4,5],[1,3,4],[2,6]]`, () => {
  const head = mergeKLists([
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6]),
  ]);
  checkList(head, [1, 1, 2, 3, 4, 4, 5, 6]);
});

test(`[]`, () => {
  const head = mergeKLists([]);
  checkList(head, []);
});

test(`[[]]`, () => {
  const head = mergeKLists([createList([])]);
  checkList(head, []);
});
