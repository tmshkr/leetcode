const { reverseList, ListNode } = require("./code.js");

function populateList(l) {
  const head = new ListNode(l[0]);
  let prev = head;
  for (let i = 1; i < l.length; i++) {
    const node = new ListNode(l[i]);
    prev.next = node;
    prev = node;
  }
  return head;
}

function checkValues(head, l) {
  const rev = l.reverse();
  let curr = head;
  let i = 0;
  while (curr?.next) {
    expect(curr.val).toEqual(rev[i]);
    i++;
    curr = curr.next;
  }
}

test(`[1,2,3,4,5]`, () => {
  const l = [1, 2, 3, 4, 5];
  const head = reverseList[populateList(l)];
  checkValues(head, l);
});

test(`[1,2]`, () => {
  const l = [1, 2];
  const head = reverseList[populateList(l)];
  checkValues(head, l);
});

test(`[]`, () => {
  const l = [];
  const head = reverseList[populateList(l)];
  checkValues(head, l);
});
