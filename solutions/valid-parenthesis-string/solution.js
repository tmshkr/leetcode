/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let lo = 0;
  let hi = 0;

  for (const char of s) {
    if (char === "(") {
      lo++;
      hi++;
    } else if (char === ")") {
      lo--;
      hi--;
    } else {
      lo--;
      hi++;
    }

    lo = Math.max(lo, 0);
    if (lo > hi) {
      return false;
    }
  }

  return lo === 0;
};

module.exports = { checkValidString };

/*
https://leetcode.com/problems/valid-parenthesis-string/
*/
