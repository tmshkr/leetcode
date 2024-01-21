/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

  // Find the closest element to x
  let L = 0;
  let R = arr.length - 1;
  while (L < R) {
    const idx = Math.floor((L + R) / 2);
    if (arr[idx] < x) {
      L = idx + 1;
    } else {
      R = idx;
    }
  }


  // Expand the window around the closest element
  R = L;
  L -= 1;
  while (R - L - 1 < k) {
    if (L < 0) {
      R++;
    } else if (R >= arr.length) {
      L--;
    } else if (Math.abs(arr[L] - x) <= Math.abs(arr[R] - x)) {
      L--;
    } else {
      R++;
    }
  }


  return arr.slice(L + 1, R);
};

module.exports = { findClosestElements };

/*
https://leetcode.com/problems/find-k-closest-elements/
*/
