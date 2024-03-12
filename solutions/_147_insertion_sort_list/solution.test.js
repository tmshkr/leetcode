const { insertionSortList, ListNode } = require("./solution.js");

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

test(`[4,2,1,3]`, () => {
  const actual = insertionSortList(createList([4, 2, 1, 3]));
  const expected = [1, 2, 3, 4];
  expect(listToArray(actual)).toEqual(expected);
});

test(`[-1,5,3,4,0]`, () => {
  const actual = insertionSortList(createList([-1, 5, 3, 4, 0]));
  const expected = [-1, 0, 3, 4, 5];
  expect(listToArray(actual)).toEqual(expected);
});
