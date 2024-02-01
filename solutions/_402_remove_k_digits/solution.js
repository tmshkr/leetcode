/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  for (const digit of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    if (digit !== "0" || stack.length > 0) {
      stack.push(digit);
    }
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.length > 0 ? stack.join("") : "0";
};

module.exports = { removeKdigits };

/*
https://leetcode.com/problems/remove-k-digits/
*/
