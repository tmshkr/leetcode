/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let i = digits.length - 1;

  while (carry && i >= 0) {
    const sum = (digits[i] += carry);
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
    i--;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};

module.exports = { plusOne };

/*
https://leetcode.com/problems/plus-one/
*/
