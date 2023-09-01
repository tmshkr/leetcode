/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const sqdist = ([x, y]) => x ** 2 + y ** 2;
  return points.sort((a, b) => sqdist(a) - sqdist(b)).slice(0, k);
};

module.exports = { kClosest };

/*
https://leetcode.com/problems/k-closest-points-to-origin/
*/
