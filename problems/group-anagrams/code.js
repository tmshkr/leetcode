/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const ht = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.join("#");
    if (ht[key]) {
      ht[key].push(str);
    } else {
      ht[key] = [str];
    }
  }

  return Object.values(ht);
};

module.exports = { groupAnagrams };

/*
https://leetcode.com/problems/group-anagrams/
*/
