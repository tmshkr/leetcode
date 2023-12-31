/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let res = 1;
  let flag = 0;

  for (let i = 0; i < s.length; i++) {
    const val = s.charCodeAt(i) - "a".charCodeAt(0);
    if ((flag & (1 << val)) !== 0) {
      flag = 0;
      res++;
    }
    flag = flag | (1 << val);
  }

  return res;
};

module.exports = { partitionString };

/*
https://leetcode.com/problems/optimal-partition-of-string/
*/
