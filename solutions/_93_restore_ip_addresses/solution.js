/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  backtrack();
  return res;

  function backtrack(start = 0, path = []) {
    if (path.length === 4) {
      if (start === s.length) {
        res.push(path.join("."));
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        if (start + i > s.length) break;
        if (i > 1 && s[start] === "0") break;
        const octet = s.slice(start, start + i);
        if (parseInt(octet) <= 255) {
          path.push(octet);
          backtrack(start + i, path);
          path.pop();
        }
      }
    }
  }
};

module.exports = { restoreIpAddresses };

/*
https://leetcode.com/problems/restore-ip-addresses/
*/
