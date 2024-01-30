/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let res = "";
  let k = "";

  for (const char of s) {
    if (Number.isInteger(Number(char))) {
      k += char;
    } else if (char === "[") {
      stack.push([k, res]);
      res = "";
      k = "";
    } else if (char === "]") {
      const [k, prev] = stack.pop();
      res = prev + res.repeat(Number(k));
    } else {
      res += char;
    }
  }

  return res;
};

module.exports = { decodeString };

/*
https://leetcode.com/problems/decode-string/
*/
