const { construct } = require("./solution.js");

function traverse(node) {
  const q = [node];
  const res = [];

  while (q.length) {
    const n = q.length;

    for (let i = 0; i < n; i++) {
      const node = q.shift();
      if (node) {
        res.push([Number(node.isLeaf), Number(node.val)]);
        q.push(node.topLeft, node.topRight, node.bottomLeft, node.bottomRight);
      } else {
        res.push(null);
      }
    }
  }

  let i = res.length - 1;
  while (res[i] === null) {
    res.pop();
    i--;
  }

  return res;
}

test(`[[0,1],[1,0]]`, () => {
  const inputs = [
    [
      [0, 1],
      [1, 0],
    ],
  ];
  const expected = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 1],
    [1, 0],
  ];
  const actual = construct(...inputs);
  expect(traverse(actual)).toEqual(expected);
});

test(`[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]`, () => {
  const inputs = [
    [
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
    ],
  ];
  const expected = [
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    null,
    null,
    null,
    null,
    [1, 0],
    [1, 0],
    [1, 1],
    [1, 1],
  ];
  const actual = construct(...inputs);
  expect(traverse(actual)).toEqual(expected);
});
