/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const res = [];
  for (char of s) {
    if (char === '*') res.pop();
    else res.push(char);
  }
  return res.join('');
};

module.exports = { removeStars };

/*
https://leetcode.com/problems/removing-stars-from-a-string/
*/
