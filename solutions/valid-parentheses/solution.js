/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const char of s) {
    if (!(char in map)) {
      stack.push(char);
    } else if (!stack.length || stack.pop() !== map[char]) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = { isValid };

/*
https://leetcode.com/problems/valid-parentheses/
*/
