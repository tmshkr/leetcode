/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return Number(Math.pow(x, n).toFixed(5));
};

module.exports = { myPow };

/*
https://leetcode.com/problems/powx-n/
*/
