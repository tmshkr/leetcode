/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set("aeiou");
  let max = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k && vowels.has(s[i - k])) count--;
    max = Math.max(max, count);
  }

  return max;
};

module.exports = { maxVowels };

/*
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
*/
