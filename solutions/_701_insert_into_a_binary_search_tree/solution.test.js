const { insertIntoBST, TreeNode } = require("./solution.js");

function createBinaryTree(levelOrderList) {
  if (!levelOrderList || levelOrderList.length === 0) {
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

function converTreeToList(root) {
  if (!root) return [];
  const res = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();
    if (node === null) {
      res.push(null);
      continue;
    }
    res.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }

  while (res[res.length - 1] === null) {
    res.pop();
  }

  return res;
}

test(`[4,2,7,1,3],5`, () => {
  const inputs = [[4, 2, 7, 1, 3], 5];
  const expected = [4, 2, 7, 1, 3, 5];
  const root = createBinaryTree(inputs[0]);
  const actual = insertIntoBST(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[40,20,60,10,30,50,70],25`, () => {
  const inputs = [[40, 20, 60, 10, 30, 50, 70], 25];
  const expected = [40, 20, 60, 10, 30, 50, 70, null, null, 25];
  const root = createBinaryTree(inputs[0]);
  const actual = insertIntoBST(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[4,2,7,1,3,null,null,null,null,null,null],5`, () => {
  const inputs = [[4, 2, 7, 1, 3, null, null, null, null, null, null], 5];
  const expected = [4, 2, 7, 1, 3, 5];
  const root = createBinaryTree(inputs[0]);
  const actual = insertIntoBST(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});
