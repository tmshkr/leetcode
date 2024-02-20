const { isPalindrome } = require("./solution.js");

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(l) {
  const head = new ListNode(l[0]);
  let prev = head;
  for (let i = 1; i < l.length; i++) {
    const node = new ListNode(l[i]);
    prev.next = node;
    prev = node;
  }
  return head;
}

test(`[1,2,2,1]`, () => {
  const head = createList([1, 2, 2, 1]);
  const expected = true;
  const actual = isPalindrome(head);
  expect(actual).toEqual(expected);
});

test(`[1,2]`, () => {
  const head = createList([1, 2]);
  const expected = false;
  const actual = isPalindrome(head);
  expect(actual).toEqual(expected);
});

test(`[1,1,2,1]`, () => {
  const head = createList([1, 1, 2, 1]);
  const expected = false;
  const actual = isPalindrome(head);
  expect(actual).toEqual(expected);
});
