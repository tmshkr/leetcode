const { getIntersectionNode, ListNode } = require("./solution.js");

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

function joinLists(headA, headB, skipA, skipB) {
  let a = headA;
  let b = headB;
  for (let i = 0; i < skipA - 1; i++) {
    a = a.next;
  }
  for (let i = 0; i < skipB; i++) {
    b = b.next;
  }
  if (b) {
    a.next = b;
  }
}

test(`8,[4,1,8,4,5],[5,6,1,8,4,5],2,3`, () => {
  const listA = createList([4, 1, 8, 4, 5]);
  const listB = createList([5, 6, 1, 8, 4, 5]);
  joinLists(listA, listB, 2, 3);
  const actual = getIntersectionNode(listA, listB);
  expect(actual.val).toEqual(8);
});

test(`2,[1,9,1,2,4],[3,2,4],3,1`, () => {
  const listA = createList([1, 9, 1, 2, 4]);
  const listB = createList([3, 2, 4]);
  joinLists(listA, listB, 3, 1);
  const actual = getIntersectionNode(listA, listB);
  expect(actual.val).toEqual(2);
});

test(`0,[2,6,4],[1,5],3,2`, () => {
  const listA = createList([2, 6, 4]);
  const listB = createList([1, 5]);
  joinLists(listA, listB, 3, 2);
  const actual = getIntersectionNode(listA, listB);
  expect(actual).toEqual(null);
});
