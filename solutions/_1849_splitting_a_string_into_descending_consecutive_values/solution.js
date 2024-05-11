/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  return split(0, -1, 0);

  function split(i, prev, count) {
    if (i >= s.length) {
      return count >= 2;
    }
    let num = 0;
    for (let j = i; j < s.length; j++) {
      num = num * 10 + parseInt(s[j]);
      if (prev === -1 || prev - 1 === num) {
        if (split(j + 1, num, count + 1)) {
          return true;
        }
      }
    }
    return false;
  }
};

module.exports = { splitString };

/*
https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
*/
