/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  while (n > 0) {
    res += n & 1;
    n >>>= 1;
  }

  return res;
};

module.exports = { hammingWeight };

/*
https://leetcode.com/problems/number-of-1-bits/
*/
