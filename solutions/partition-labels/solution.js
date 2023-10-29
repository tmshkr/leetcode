/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = new Array(26);
  const aCode = "a".charCodeAt(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - aCode] = i;
  }
  const ans = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < n; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - aCode]);
    if (i === end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
};

module.exports = { partitionLabels };

/*
https://leetcode.com/problems/partition-labels/
*/
