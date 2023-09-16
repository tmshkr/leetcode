const { copyRandomList, Node } = require("./solution.js");

function createList(l) {
  const head = new Node(l[0][0]);
  let prev = head;
  const arr = [head];

  for (let i = 1; i < l.length; i++) {
    const node = new Node(l[i][0]);
    arr.push(node);
    prev.next = node;
    prev = node;
  }

  for (let i = 0; i < l.length; i++) {
    const random = l[i][1];
    if (random) {
      arr[i].random = arr[random];
    }
  }

  return head;
}

function checkList(head, l) {
  let curr = head;
  let i = 0;
  const arr = [];

  while (curr) {
    expect(curr.val).toEqual(l[i][0]);
    arr.push(curr);
    i++;
    curr = curr.next;
  }

  for (let i = 0; i < l.length; i++) {
    const random = l[i][1];
    curr = arr[i];
    if (random) {
      expect(curr.random).toBe(arr[random]);
    }
  }
}

test(`[[7,null],[13,0],[11,4],[10,2],[1,0]]`, () => {
  const head = copyRandomList(
    createList([
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ])
  );
  checkList(head, [
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ]);
});

test(`[[1,1],[2,1]]`, () => {
  const head = copyRandomList(
    createList([
      [1, 1],
      [2, 1],
    ])
  );
  checkList(head, [
    [1, 1],
    [2, 1],
  ]);
});

test(`[[3,null],[3,0],[3,null]]`, () => {
  const head = copyRandomList(
    createList([
      [3, null],
      [3, 0],
      [3, null],
    ])
  );
  checkList(head, [
    [3, null],
    [3, 0],
    [3, null],
  ]);
});
