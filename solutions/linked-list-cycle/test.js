const { hasCycle, ListNode } = require("./code.js");

function createList(l, pos) {
  const head = new ListNode(l[0]);
  let prev = head;
  const arr = [];

  for (let i = 1; i < l.length; i++) {
    const node = new ListNode(l[i]);
    arr.push(node);
    prev.next = node;
    prev = node;
  }

  if (pos > -1) {
    arr[arr.length - 1].next = arr[pos];
  }

  return head;
}

test(`[3,2,0,-4],1`, () => {
  const result = hasCycle(createList([3, 2, 0, -4], 1));
  expect(result).toEqual(true);
});

test(`[1,2],0`, () => {
  const result = hasCycle(createList([1, 2], 0));
  expect(result).toEqual(true);
});

test(`[1],-1`, () => {
  const result = hasCycle(createList([1], -1));
  expect(result).toEqual(false);
});
