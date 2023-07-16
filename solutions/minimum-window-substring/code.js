/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === "") return "";

  let need = 0;
  const cntr = {};
  for (char of t) {
    if (char in cntr) {
      cntr[char]++;
    } else {
      cntr[char] = 1;
      need++;
    }
  }

  let have = 0;
  let l = 0;
  const window = {};
  let res = [-1, -1];
  let resLen = Infinity;

  for (let r = 0; r < s.length; r++) {
    const rChar = s[r];
    window[rChar] = window[rChar] + 1 || 1;

    if (rChar in cntr && window[rChar] === cntr[rChar]) {
      have++;
    }

    while (have === need) {
      const lChar = s[l];
      const windowLen = r - l + 1;
      if (windowLen < resLen) {
        res = [l, r];
        resLen = windowLen;
      }
      window[lChar]--;
      if (lChar in cntr && window[lChar] < cntr[lChar]) {
        have--;
      }
      l++;
    }
  }

  return resLen < Infinity ? s.slice(res[0], res[1] + 1) : "";
};

module.exports = { minWindow };

/*
https://leetcode.com/problems/minimum-window-substring/
*/
