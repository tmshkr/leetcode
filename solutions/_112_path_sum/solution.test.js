const { hasPathSum, TreeNode } = require("./solution.js");

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

test(`[5,4,8,11,null,13,4,7,2,null,null,null,1],22`, () => {
  const inputs = [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22];
  const expected = true;
  const root = createBinaryTree(inputs[0]);
  const actual = hasPathSum(root, inputs[1]);
  expect(actual).toEqual(expected);
});

test(`[1,2,3],5`, () => {
  const inputs = [[1, 2, 3], 5];
  const expected = false;
  const root = createBinaryTree(inputs[0]);
  const actual = hasPathSum(root, inputs[1]);
  expect(actual).toEqual(expected);
});

test(`[],0`, () => {
  const inputs = [[], 0];
  const expected = false;
  const root = createBinaryTree(inputs[0]);
  const actual = hasPathSum(root, inputs[1]);
  expect(actual).toEqual(expected);
});
