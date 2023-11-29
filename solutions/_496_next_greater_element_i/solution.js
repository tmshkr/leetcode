/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number[]}
 */
var nextGreaterElement = function (a, b) {
  const val2idx = {};
  for (let i = 0; i < a.length; i++) {
    val2idx[a[i]] = i;
  }

  const res = Array(a.length).fill(-1);
  const stack = [];

  for (let i = 0; i < b.length; i++) {
    const cur = b[i];

    while (stack.length && cur > stack[stack.length - 1]) {
      const val = stack.pop();
      const idx = val2idx[val];
      res[idx] = cur;
    }
    if (cur in val2idx) {
      stack.push(cur);
    }
  }
  return res;
};

module.exports = { nextGreaterElement };

/*
https://leetcode.com/problems/next-greater-element-i/
*/
