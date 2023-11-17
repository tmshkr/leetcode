/**
 * @param {number} x
 * @return {number}
 */
const range = [-Math.pow(2, 31), Math.pow(2, 31) - 1]; // [-2147483648, 2147483647]
var reverse = function (x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let res = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    res = res * 10 + digit;

    if (isNegative ? -1 * res < range[0] : res > range[1]) {
      return 0;
    }
  }

  return isNegative ? -1 * res : res;
};

module.exports = { reverse };

/*
https://leetcode.com/problems/reverse-integer/
*/
