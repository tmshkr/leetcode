const { levelOrder, TreeNode } = require("./code.js");

function createBinaryTree(levelOrderList) {
  if (!levelOrderList) {
    return null;
  }

  const root = new TreeNode(levelOrderList[0]);
  const q = [root];
  let index = 1;

  while (q && index < levelOrderList.length) {
    const node = q.shift();

    const leftVal = levelOrderList[index];
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal);
      q.push(node.left);
    }
    index++;

    if (index < levelOrderList.length) {
      const rightVal = levelOrderList[index];
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        q.push(node.right);
      }
      index++;
    }
  }
  return root;
}

test(`[3,9,20,null,null,15,7]`, () => {
  const spec = [[3], [9, 20], [15, 7]];
  const res = levelOrder(createBinaryTree([3, 9, 20, null, null, 15, 7]));

  for (let i = 0; i < spec.length; i++) {
    for (let j = 0; j < spec[i].length; j++) {
      expect(res[i][j]).toEqual(spec[i][j]);
    }
  }
});

test(`[1]`, () => {
  const spec = [[1]];
  const res = levelOrder(createBinaryTree([1]));

  for (let i = 0; i < spec.length; i++) {
    for (let j = 0; j < spec[i].length; j++) {
      expect(res[i][j]).toEqual(spec[i][j]);
    }
  }
});

test(`[]`, () => {
  const spec = [[]];
  const res = levelOrder(createBinaryTree([]));

  for (let i = 0; i < spec.length; i++) {
    for (let j = 0; j < spec[i].length; j++) {
      expect(res[i][j]).toEqual(spec[i][j]);
    }
  }
});
