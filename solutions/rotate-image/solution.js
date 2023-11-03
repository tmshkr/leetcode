/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const top = matrix[l][l + i];
      const right = matrix[l + i][r];
      const bottom = matrix[r][r - i];
      const left = matrix[r - i][l];

      matrix[l][l + i] = left;
      matrix[l + i][r] = top;
      matrix[r][r - i] = right;
      matrix[r - i][l] = bottom;
    }

    l++;
    r--;
  }
};

module.exports = { rotate };

/*
https://leetcode.com/problems/rotate-image/
*/
