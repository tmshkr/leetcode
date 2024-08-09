/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == i % 2) {
      count1++;
    } else {
      count2++;
    }
  }
  return Math.min(count1, count2);
};

module.exports = { minOperations };

/*
https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
*/
