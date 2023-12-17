/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let swaps = 0;
  let open = 0;
  let close = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "[" ? open++ : close++;

    if (close > open) {
      swaps++;
      close--;
      open++;
    }
  }

  return swaps;
};

module.exports = { minSwaps };

/*
https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
*/
