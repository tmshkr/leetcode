/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let largest = "";
  for (let i = 0; i <= num.length - 3; i++) {
    const sub = num.substring(i, i + 3);
    if (sub[0] === sub[1] && sub[1] === sub[2]) {
      if (sub > largest) {
        largest = sub;
      }
    }
  }
  return largest;
};

module.exports = { largestGoodInteger };

/*
https://leetcode.com/problems/largest-3-same-digit-number-in-string/
*/
