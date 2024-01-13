/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    boats++;
  }

  return boats;
};

module.exports = { numRescueBoats };

/*
https://leetcode.com/problems/boats-to-save-people/
*/
