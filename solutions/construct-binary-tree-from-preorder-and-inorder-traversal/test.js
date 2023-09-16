const { buildTree, TreeNode } = require("./solution.js");

function levelOrderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();
    result.push(node?.val || null);

    if (node) {
      q.push(node.left);
      q.push(node.right);
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i]) {
      break;
    }
    result.pop();
  }

  return result;
}

function compare(res, spec) {
  expect(res.length).toEqual(spec.length);

  for (let i = 0; i < spec.length; i++) {
    expect(res[i]).toEqual(spec[i]);
  }
}

test(`[3,9,20,15,7],[9,3,15,20,7]`, () => {
  const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
  const res = levelOrderTraversal(root);
  const spec = [3, 9, 20, null, null, 15, 7];
  compare(res, spec);
});

test(`[-1],[-1]`, () => {
  const root = buildTree([-1], [-1]);
  const res = levelOrderTraversal(root);
  const spec = [-1];
  compare(res, spec);
});
