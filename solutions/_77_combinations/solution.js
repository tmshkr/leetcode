/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  backtrack(1, []);
  return res;

  function backtrack(start, path) {
    if (path.length === k) {
      res.push([...path]);
    } else {
      for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i + 1, path);
        path.pop();
      }
    }
  }
};

module.exports = { combine };

/*
https://leetcode.com/problems/combinations/
*/
