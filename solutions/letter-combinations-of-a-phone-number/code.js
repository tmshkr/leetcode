/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "qprs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  const res = [];

  const backtrack = (i = 0, cur = "") => {
    if (i === digits.length) {
      res.push(cur);
      return;
    }

    for (const c of map[digits[i]]) {
      backtrack(i + 1, cur + c);
    }
  };

  if (digits.length) {
    backtrack();
  }

  return res;
};

module.exports = { letterCombinations };

/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/
