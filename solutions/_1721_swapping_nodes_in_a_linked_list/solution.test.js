const { swapNodes, ListNode } = require("./solution.js");

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

test(`[1,2,3,4,5],2`, () => {
  const expected = [1, 4, 3, 2, 5];
  const actual = swapNodes(createList([1, 2, 3, 4, 5]), 2);
  expect(listToArray(actual)).toEqual(expected);
});

test(`[7,9,6,6,7,8,3,0,9,5],5`, () => {
  const actual = swapNodes(createList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]), 5);
  const expected = [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];
  expect(listToArray(actual)).toEqual(expected);
});
