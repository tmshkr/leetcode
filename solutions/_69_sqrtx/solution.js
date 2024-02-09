/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let lo = 0;
  let hi = x;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const squared = mid ** 2;
    if (squared < x)
      lo = mid + 1;
    else if (squared > x)
      hi = mid - 1;
    else
      return mid;
  };

  return hi;
};

module.exports = { mySqrt };

/*
https://leetcode.com/problems/sqrtx/
*/
