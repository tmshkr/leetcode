/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let L = 1;
  let R = num;
  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    const guess = mid * mid;
    if (guess === num) {
      return true;
    } else if (guess < num) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return false;
};

module.exports = { isPerfectSquare };

/*
https://leetcode.com/problems/valid-perfect-square/
*/
