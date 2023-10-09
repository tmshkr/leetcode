/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) {
      continue;
    }

    for (const word of wordDict) {
      if (s.slice(i, i + word.length) === word) {
        dp[i + word.length] = true;
      }
    }
  }

  return dp[s.length];
};

module.exports = { wordBreak };

/*
https://leetcode.com/problems/word-break/
*/
