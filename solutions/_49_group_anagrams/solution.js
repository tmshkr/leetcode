/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = new Map();
  for (const str of strs) {
    const sortedString = str.split("").sort().join("");
    if (!res.has(sortedString)) {
      res.set(sortedString, []);
    }
    res.get(sortedString).push(str);
  }
  return Array.from(res.values());
};

module.exports = { groupAnagrams };

/*
https://leetcode.com/problems/group-anagrams/
*/
