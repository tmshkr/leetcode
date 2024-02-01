/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];
    if (char !== top?.char) {
      stack.push({ char, count: 1 });
    } else {
      top.count++;
    }
    if (top?.count === k) {
      stack.pop();
    }
  }
  return stack.map(({ char, count }) => char.repeat(count)).join("");
};

module.exports = { removeDuplicates };

/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
*/
