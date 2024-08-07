/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  let ones = s.split("").filter((ch) => ch === "1").length;
  let zeros = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      ones--;
    }
    max = Math.max(max, ones + zeros);
  }
  return max;
};

module.exports = { maxScore };

/*
https://leetcode.com/problems/maximum-score-after-splitting-a-string/
*/
