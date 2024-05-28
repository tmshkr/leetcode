/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let max = 0;
  const dp = [0];
  for (const str of arr) {
    let a = 0;
    let hasDuplicate = false;
    for (const ch of str) {
      const b = 1 << (ch.charCodeAt(0) - 97);
      if (a & b) {
        hasDuplicate = true;
        break;
      }
      a |= b;
    }
    if (!hasDuplicate) {
      for (let i = dp.length - 1; i >= 0; i--) {
        const hasOverlap = (dp[i] & a) !== 0;
        if (!hasOverlap) {
          const s = dp[i] | a;
          dp.push(s);
          max = Math.max(
            max,
            s
              .toString(2)
              .split("")
              .filter((bit) => bit === "1").length
          );
        }
      }
    }
  }
  return max;
};

module.exports = { maxLength };

/*
https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
*/
