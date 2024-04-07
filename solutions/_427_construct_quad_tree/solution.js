// Definition for a QuadTree node.
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid, row = 0, col = 0, n = grid.length) {
  if (n === 1) {
    return new Node(grid[row][col] === 1, true);
  }

  if (isLeaf(grid, row, col, n)) {
    return new Node(grid[row][col] === 1, true);
  }

  n /= 2;
  return new Node(
    true,
    false,
    construct(grid, row, col, n),
    construct(grid, row, col + n, n),
    construct(grid, row + n, col, n),
    construct(grid, row + n, col + n, n)
  );
};

function isLeaf(grid, row, col, n) {
  const val = grid[row][col];
  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (grid[i][j] !== val) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { construct, Node };

/*
https://leetcode.com/problems/construct-quad-tree/
*/
