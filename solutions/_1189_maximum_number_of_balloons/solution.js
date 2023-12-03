/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const ctrInput = {};
  const ctrTarget = {};

  for (const char of text) {
    ctrInput[char] = (ctrInput[char] || 0) + 1;
  }
  for (const char of "balloon") {
    ctrTarget[char] = (ctrTarget[char] || 0) + 1;
  }

  let result = text.length;
  for (const char in ctrTarget) {
    result = Math.min(
      result,
      Math.floor((ctrInput[char] || 0) / ctrTarget[char])
    );
  }

  return result;
};

module.exports = { maxNumberOfBalloons };

/*
https://leetcode.com/problems/maximum-number-of-balloons/
*/
