const { mergeTwoLists, ListNode } = require("./code.js");

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
  let curr = head;
  let i = 0;
  while (curr) {
    console.log(curr.val);
    expect(curr.val).toEqual(l[i] || 0);
    i++;
    curr = curr.next;
  }
}

test(`[1,2,4],[1,3,4]`, () => {
  const merged = mergeTwoLists(
    populateList([1, 2, 4]),
    populateList([1, 3, 4])
  );
  checkValues(merged, [1, 1, 2, 3, 4, 4]);
});

test(`[],[]`, () => {
  const merged = mergeTwoLists(populateList([]), populateList([]));
  checkValues(merged, []);
});

test(`[],[0]`, () => {
  const merged = mergeTwoLists(populateList([]), populateList([0]));
  checkValues(merged, [0]);
});
