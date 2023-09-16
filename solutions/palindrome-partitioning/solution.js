/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];

  const dfs = (str, path = []) => {
    if (str.length === 0) {
      res.push(path);
      return;
    }
    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        dfs(str.slice(i), [...path, subStr]);
      }
    }
  };

  dfs(s);
  return res;
};

const isPalindrome = (str) => {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

module.exports = { partition };

/*
https://leetcode.com/problems/palindrome-partitioning/
*/
