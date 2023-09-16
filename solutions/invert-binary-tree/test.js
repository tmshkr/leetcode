const { invertTree, TreeNode } = require("./solution.js");

function insertNode(root, val) {
  if (root.val) {
    if (val < root.val) {
      if (root.left === null) {
        root.left = new TreeNode(val);
      } else {
        insertNode(root.left, val);
      }
    } else if (val > root.val) {
      if (root.right === null) {
        root.right = new TreeNode(val);
      } else {
        insertNode(root.right, val);
      }
    }
  } else {
    root.val = val;
  }
}

function createTree(l) {
  if (l.length === 0) {
    return null;
  }

  const root = new TreeNode();
  for (const val of l) {
    insertNode(root, val);
  }

  return root;
}

function checkTree(root, spec) {
  if (!root) {
    return;
  }

  const q = [root];

  while (q.length) {
    const levelNodes = q.length;
    for (let i = 0; i < levelNodes; i++) {
      const node = q.shift();
      expect(node.val).toEqual(spec[0]);
      spec.shift();

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
}

test(`[4,2,7,1,3,6,9]`, () => {
  const root = invertTree(createTree([4, 2, 7, 1, 3, 6, 9]));
  checkTree(root, [4, 7, 2, 9, 6, 3, 1]);
});

test(`[2,1,3]`, () => {
  const root = invertTree(createTree([2, 1, 3]));
  checkTree(root, [2, 3, 1]);
});

test(`[]`, () => {
  const root = invertTree(createTree([]));
  checkTree(root, []);
});
