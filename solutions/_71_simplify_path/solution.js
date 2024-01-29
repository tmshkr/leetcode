/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  for (const dir of path.split('/')) {
    if (dir === '..') {
      stack.pop();
    } else if (dir && dir !== '.') {
      stack.push(dir);
    }
  }

  return '/' + stack.join('/');
};

module.exports = { simplifyPath };

/*
https://leetcode.com/problems/simplify-path/
*/
