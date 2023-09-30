/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;

  let a = 2;
  let b = 3;

  for (let i = 4; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
};

module.exports = { climbStairs };

/*
https://leetcode.com/problems/climbing-stairs/
*/
