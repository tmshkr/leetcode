/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const repeated = new Set();
  const seen = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const sub = s.slice(i, i + 10);
    if (seen.has(sub)) {
      repeated.add(sub);
    } else {
      seen.add(sub);
    }
  }
  return Array.from(repeated);
};

module.exports = { findRepeatedDnaSequences };

/*
https://leetcode.com/problems/repeated-dna-sequences/
*/
