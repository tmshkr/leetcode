const { middleNode } = require("./solution.js");

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head) {
  const arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}

test(`[1,2,3,4,5]`, () => {
  const expected = [3, 4, 5];
  const actual = middleNode(createList([1, 2, 3, 4, 5]));
  expect(listToArray(actual)).toEqual(expected);
});

test(`[1,2,3,4,5,6]`, () => {
  const expected = [4, 5, 6];
  const actual = middleNode(createList([1, 2, 3, 4, 5, 6]));
  expect(listToArray(actual)).toEqual(expected);
});
